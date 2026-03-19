// PTH DIGITAL - Customer Management & Reporting System
// File riêng để quản lý khách hàng mới và xuất báo cáo

import fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';
import PDFDocument from 'pdfkit';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, 'data');
const reportsDir = path.join(__dirname, 'reports');
const customersFile = path.join(dataDir, 'customers-registry.json');

// Đảm bảo thư mục tồn tại
fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(reportsDir, { recursive: true });

// Khởi tạo file customers registry nếu chưa có
if (!fs.existsSync(customersFile)) {
  fs.writeFileSync(customersFile, JSON.stringify({
    customers: [],
    lastUpdated: new Date().toISOString(),
    version: '1.0'
  }, null, 2));
}

// Class quản lý khách hàng
class CustomerRegistry {
  constructor() {
    this.loadData();
  }

  loadData() {
    try {
      const data = fs.readFileSync(customersFile, 'utf8');
      this.data = JSON.parse(data);
    } catch (error) {
      console.error('Error loading customer registry:', error);
      this.data = {
        customers: [],
        lastUpdated: new Date().toISOString(),
        version: '1.0'
      };
    }
  }

  saveData() {
    try {
      this.data.lastUpdated = new Date().toISOString();
      fs.writeFileSync(customersFile, JSON.stringify(this.data, null, 2));
    } catch (error) {
      console.error('Error saving customer registry:', error);
    }
  }

  // Thêm khách hàng mới
  addCustomer(customerData) {
    const newCustomer = {
      id: customerData.id,
      username: customerData.username,
      fullName: customerData.fullName,
      email: customerData.email,
      phone: customerData.phone,
      address: customerData.address,
      balance: customerData.balance || 0,
      bio: customerData.bio || '',
      avatar: customerData.avatar || '',
      role: customerData.role || 'customer',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'active',
      registrationSource: 'web',
      totalOrders: 0,
      totalDeposits: 0,
      totalSpent: 0,
      lastLogin: null,
      ipAddress: null,
      deviceInfo: null
    };

    this.data.customers.push(newCustomer);
    this.saveData();
    return newCustomer;
  }

  // Cập nhật thông tin khách hàng
  updateCustomer(customerId, updateData) {
    const customer = this.data.customers.find(c => c.id === customerId);
    if (customer) {
      Object.assign(customer, updateData, { updatedAt: new Date().toISOString() });
      this.saveData();
      return customer;
    }
    return null;
  }

  // Lấy thông tin khách hàng
  getCustomer(customerId) {
    return this.data.customers.find(c => c.id === customerId);
  }

  // Lấy tất cả khách hàng
  getAllCustomers() {
    return this.data.customers;
  }

  // Cập nhật thống kê khách hàng
  updateCustomerStats(customerId, stats) {
    const customer = this.getCustomer(customerId);
    if (customer) {
      customer.totalOrders = stats.totalOrders || customer.totalOrders;
      customer.totalDeposits = stats.totalDeposits || customer.totalDeposits;
      customer.totalSpent = stats.totalSpent || customer.totalSpent;
      customer.lastLogin = stats.lastLogin || customer.lastLogin;
      customer.updatedAt = new Date().toISOString();
      this.saveData();
    }
  }

  // Xuất báo cáo Excel
  async exportExcelReport(customers, orders, deposits) {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'PTH DIGITAL';
    workbook.lastModifiedBy = 'PTH DIGITAL System';
    workbook.created = new Date();
    workbook.modified = new Date();

    // Sheet 1: Tổng quan khách hàng
    const overviewSheet = workbook.addWorksheet('Tổng quan khách hàng');

    overviewSheet.columns = [
      { header: 'ID', key: 'id', width: 15 },
      { header: 'Tên đăng nhập', key: 'username', width: 15 },
      { header: 'Họ tên', key: 'fullName', width: 25 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Số điện thoại', key: 'phone', width: 15 },
      { header: 'Địa chỉ', key: 'address', width: 30 },
      { header: 'Số dư hiện tại', key: 'balance', width: 15 },
      { header: 'Tổng đơn hàng', key: 'totalOrders', width: 15 },
      { header: 'Tổng nạp tiền', key: 'totalDeposits', width: 15 },
      { header: 'Tổng chi tiêu', key: 'totalSpent', width: 15 },
      { header: 'Ngày tạo', key: 'createdAt', width: 20 },
      { header: 'Đăng nhập cuối', key: 'lastLogin', width: 20 },
      { header: 'Trạng thái', key: 'status', width: 10 }
    ];

    customers.forEach(customer => {
      overviewSheet.addRow({
        id: customer.id,
        username: customer.username,
        fullName: customer.fullName,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
        balance: customer.balance,
        totalOrders: customer.totalOrders || 0,
        totalDeposits: customer.totalDeposits || 0,
        totalSpent: customer.totalSpent || 0,
        createdAt: customer.createdAt ? new Date(customer.createdAt).toLocaleDateString('vi-VN') : '',
        lastLogin: customer.lastLogin ? new Date(customer.lastLogin).toLocaleDateString('vi-VN') : '',
        status: customer.status || 'active'
      });
    });

    // Sheet 2: Chi tiết đơn hàng
    const ordersSheet = workbook.addWorksheet('Chi tiết đơn hàng');

    ordersSheet.columns = [
      { header: 'Mã đơn', key: 'id', width: 15 },
      { header: 'Khách hàng', key: 'customerName', width: 25 },
      { header: 'Dịch vụ', key: 'serviceName', width: 30 },
      { header: 'Số lượng', key: 'quantity', width: 10 },
      { header: 'Tổng coin', key: 'totalCoin', width: 15 },
      { header: 'Trạng thái', key: 'status', width: 15 },
      { header: 'Ngày tạo', key: 'createdAt', width: 20 },
      { header: 'Ngày cập nhật', key: 'updatedAt', width: 20 }
    ];

    orders.forEach(order => {
      const customer = customers.find(c => c.id === order.customerId);
      ordersSheet.addRow({
        id: order.id,
        customerName: customer ? customer.fullName : 'N/A',
        serviceName: order.serviceName,
        quantity: order.quantity,
        totalCoin: order.totalCoin,
        status: order.status,
        createdAt: order.createdAt ? new Date(order.createdAt).toLocaleDateString('vi-VN') : '',
        updatedAt: order.updatedAt ? new Date(order.updatedAt).toLocaleDateString('vi-VN') : ''
      });
    });

    // Sheet 3: Chi tiết nạp tiền
    const depositsSheet = workbook.addWorksheet('Chi tiết nạp tiền');

    depositsSheet.columns = [
      { header: 'Mã nạp', key: 'id', width: 15 },
      { header: 'Khách hàng', key: 'customerName', width: 25 },
      { header: 'Số tiền', key: 'amount', width: 15 },
      { header: 'Coin nhận', key: 'coin', width: 15 },
      { header: 'Trạng thái', key: 'status', width: 15 },
      { header: 'Nội dung CK', key: 'note', width: 30 },
      { header: 'Ngày tạo', key: 'createdAt', width: 20 }
    ];

    deposits.forEach(deposit => {
      const customer = customers.find(c => c.id === deposit.customerId);
      depositsSheet.addRow({
        id: deposit.id,
        customerName: customer ? customer.fullName : 'N/A',
        amount: deposit.amount,
        coin: deposit.coin,
        status: deposit.status,
        note: deposit.note,
        createdAt: deposit.createdAt ? new Date(deposit.createdAt).toLocaleDateString('vi-VN') : ''
      });
    });

    // Lưu file
    const fileName = `pth-digital-report-${new Date().toISOString().split('T')[0]}.xlsx`;
    const filePath = path.join(reportsDir, fileName);
    await workbook.xlsx.writeFile(filePath);

    return filePath;
  }

  // Xuất báo cáo PDF
  async exportPDFReport(customers, orders, deposits) {
    return new Promise((resolve, reject) => {
      const fileName = `pth-digital-report-${new Date().toISOString().split('T')[0]}.pdf`;
      const filePath = path.join(reportsDir, fileName);

      const doc = new PDFDocument();
      const stream = fs.createWriteStream(filePath);

      doc.pipe(stream);

      // Header
      doc.fontSize(20).text('PTH DIGITAL - Báo cáo tổng hợp', { align: 'center' });
      doc.moveDown();
      doc.fontSize(12).text(`Ngày xuất: ${new Date().toLocaleDateString('vi-VN')}`, { align: 'center' });
      doc.moveDown(2);

      // Thống kê tổng quan
      doc.fontSize(16).text('TỔNG QUAN');
      doc.moveDown();

      const totalCustomers = customers.length;
      const activeCustomers = customers.filter(c => c.status === 'active').length;
      const totalOrders = orders.length;
      const completedOrders = orders.filter(o => o.status === 'completed').length;
      const totalDeposits = deposits.reduce((sum, d) => sum + d.amount, 0);
      const totalRevenue = orders.reduce((sum, o) => sum + o.totalCoin, 0);

      doc.fontSize(10);
      doc.text(`Tổng số khách hàng: ${totalCustomers}`);
      doc.text(`Khách hàng đang hoạt động: ${activeCustomers}`);
      doc.text(`Tổng đơn hàng: ${totalOrders}`);
      doc.text(`Đơn hàng hoàn thành: ${completedOrders}`);
      doc.text(`Tổng tiền nạp: ${totalDeposits.toLocaleString('vi-VN')} VND`);
      doc.text(`Tổng doanh thu: ${totalRevenue.toLocaleString('vi-VN')} Coin`);
      doc.moveDown(2);

      // Danh sách khách hàng
      doc.fontSize(16).text('DANH SÁCH KHÁCH HÀNG');
      doc.moveDown();

      customers.forEach((customer, index) => {
        doc.fontSize(10);
        doc.text(`${index + 1}. ${customer.fullName} (${customer.username})`);
        doc.text(`   Email: ${customer.email}`);
        doc.text(`   Số dư: ${customer.balance.toLocaleString('vi-VN')} Coin`);
        doc.text(`   Ngày tạo: ${customer.createdAt ? new Date(customer.createdAt).toLocaleDateString('vi-VN') : 'N/A'}`);
        doc.moveDown();
      });

      doc.end();

      stream.on('finish', () => resolve(filePath));
      stream.on('error', reject);
    });
  }

  // Đồng bộ dữ liệu từ main database
  syncFromMainDB(mainDB) {
    if (mainDB.users) {
      const existingIds = new Set(this.data.customers.map(c => c.id));

      mainDB.users.forEach(user => {
        if (user.role === 'customer' && !existingIds.has(user.id)) {
          this.addCustomer(user);
        } else if (existingIds.has(user.id)) {
          // Cập nhật thông tin nếu cần
          this.updateCustomer(user.id, {
            balance: user.balance,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone
          });
        }
      });
    }

    // Cập nhật thống kê từ orders và deposits
    if (mainDB.orders) {
      mainDB.orders.forEach(order => {
        const customer = this.getCustomer(order.customerId);
        if (customer) {
          const stats = {
            totalOrders: (customer.totalOrders || 0) + 1,
            totalSpent: (customer.totalSpent || 0) + order.totalCoin
          };
          this.updateCustomerStats(order.customerId, stats);
        }
      });
    }

    if (mainDB.deposits) {
      mainDB.deposits.forEach(deposit => {
        const customer = this.getCustomer(deposit.customerId);
        if (customer) {
          const stats = {
            totalDeposits: (customer.totalDeposits || 0) + deposit.amount
          };
          this.updateCustomerStats(deposit.customerId, stats);
        }
      });
    }
  }
}

// Export instance
const customerRegistry = new CustomerRegistry();

export default customerRegistry;