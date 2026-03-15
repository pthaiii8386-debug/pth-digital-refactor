import express from 'express';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import cron from 'node-cron';
import ExcelJS from 'exceljs';
import PDFDocument from 'pdfkit';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const dataDir = path.join(__dirname, 'data');
const reportsDir = path.join(__dirname, 'reports');
const dbPath = path.join(dataDir, 'app-db.json');
const JWT_SECRET = process.env.JWT_SECRET || 'pth-digital-enterprise-secret';
const PORT = Number(process.env.PORT || 3000);
const COOKIE_NAME = 'pth_auth';

fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(reportsDir, { recursive: true });

const rolePermissions = {
  admin: ['admin','services','customers','payment','chat','settings','reports'],
  support: ['admin','customers','chat'],
  accountant: ['admin','customers','payment','reports'],
  customer: ['customer']
};

const seedUsers = [
  {
    id: 'admin',
    role: 'admin',
    username: 'admin',
    password: 'Admin@123',
    fullName: 'Hải Phạm',
    email: 'admin@pthdigital.vn',
    phone: '0901 234 567',
    address: 'Hồ Chí Minh',
    balance: 0,
    bio: 'Tài khoản quản trị hệ thống.',
    avatar: '',
    status: 'active'
  },
  {
    id: 'staff-support',
    role: 'support',
    username: 'support',
    password: 'Support@123',
    fullName: 'Nhân viên chat',
    email: 'support@pthdigital.vn',
    phone: '0901 111 222',
    address: 'TP.HCM',
    balance: 0,
    bio: 'Nhân viên phụ trách live chat.',
    avatar: '',
    status: 'active'
  },
  {
    id: 'staff-accountant',
    role: 'accountant',
    username: 'accountant',
    password: 'Accounting@123',
    fullName: 'Kế toán',
    email: 'accounting@pthdigital.vn',
    phone: '0901 333 444',
    address: 'TP.HCM',
    balance: 0,
    bio: 'Phụ trách lệnh nạp và đối soát.',
    avatar: '',
    status: 'active'
  },
  {
    id: 'u1',
    role: 'customer',
    username: 'minhanh',
    password: '123456',
    fullName: 'Minh Anh',
    email: 'minhanh@gmail.com',
    phone: '0988 223 111',
    address: 'Quận 7, TP.HCM',
    balance: 180000,
    bio: 'Khách hàng dùng gói social và chăm sóc fanpage.',
    avatar: '',
    status: 'active'
  },
  {
    id: 'u2',
    role: 'customer',
    username: 'giabao',
    password: '123456',
    fullName: 'Gia Bảo',
    email: 'giabao@gmail.com',
    phone: '0933 552 188',
    address: 'Thủ Đức, TP.HCM',
    balance: 85000,
    bio: 'Khách hàng quan tâm website và SEO.',
    avatar: '',
    status: 'active'
  }
];

function seedDb() {
  const users = seedUsers.map(user => ({ ...user, passwordHash: bcrypt.hashSync(user.password, 10), password: undefined }));
  return {
    meta: {
      version: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      syncRunAt: null
    },
    company: {
      name: 'PTH DIGITAL',
      slogan: 'Nền tảng dịch vụ số chuyên nghiệp cho doanh nghiệp',
      about: 'Website dịch vụ số có cổng đăng nhập rõ ràng, khu khách hàng tách trang, khu admin đầy đủ chức năng và giao diện tối ưu tốt trên desktop lẫn điện thoại.',
      adminName: 'Hải Phạm',
      adminTitle: 'Founder & Digital Operations Lead',
      supportEmail: 'support@pthdigital.vn',
      supportPhone: '0901 234 567',
      address: 'Hồ Chí Minh, Việt Nam',
      trustText: 'Thiết kế gọn, quy trình rõ, hiển thị đẹp trên mobile và dễ nâng cấp lên backend thật.',
      websiteEmail: 'hello@pthdigital.vn',
      websiteAddress: 'Quận 1, TP.HCM',
      websitePhone: '0901 234 567'
    },
    payment: {
      bankName: 'Vietcombank',
      accountName: 'PTH DIGITAL',
      accountNumber: '0123456789',
      minDeposit: 50000,
      note: 'Chuyển khoản đúng nội dung để admin duyệt nhanh hơn. Số tiền thấp hơn mức khuyến nghị vẫn có thể tạo yêu cầu.',
      qrImage: ''
    },
    integration: {
      enabled: false,
      endpoint: '',
      apiKey: '',
      authType: 'bearer',
      servicePath: '',
      nameField: 'name',
      categoryField: 'category',
      priceField: 'price',
      unitField: 'unit',
      descriptionField: 'description',
      tagsField: 'tags',
      featuredField: 'featured',
      statusField: 'status',
      syncEveryMinutes: 60,
      webhookSecret: 'sync-demo-secret'
    },
    users,
    services: [
      {
        id: 'sv1',
        name: 'Thiết kế landing page doanh nghiệp',
        category: 'Website',
        price: 120000,
        unit: 'gói',
        description: 'Thiết kế landing page chuyên nghiệp, giao diện rõ ràng cho dịch vụ doanh nghiệp.',
        image: '',
        tags: ['UI hiện đại', 'Responsive', 'Chuẩn doanh nghiệp'],
        featured: true,
        status: 'active',
        source: 'manual',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'sv2',
        name: 'Quản trị fanpage & nội dung social',
        category: 'Social',
        price: 90000,
        unit: 'tháng',
        description: 'Lên lịch nội dung, concept, chăm sóc trang để thương hiệu hoạt động đều hơn.',
        image: '',
        tags: ['Content plan', 'Fanpage', 'Tối ưu hiện diện'],
        featured: true,
        status: 'active',
        source: 'manual',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'sv3',
        name: 'SEO tổng thể website',
        category: 'SEO',
        price: 150000,
        unit: 'tháng',
        description: 'Tối ưu cấu trúc, nội dung và từ khóa để website có nền tảng tăng trưởng lâu dài.',
        image: '',
        tags: ['Keyword', 'Technical SEO', 'Content hub'],
        featured: true,
        status: 'active',
        source: 'manual',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ],
    orders: [
      {
        id: 'OD-20260314-0001',
        customerId: 'u1',
        serviceId: 'sv2',
        serviceName: 'Quản trị fanpage & nội dung social',
        quantity: 1,
        totalCoin: 90000,
        note: 'Theo gói tiêu chuẩn',
        status: 'completed',
        createdAt: '14/03/2026 09:20'
      }
    ],
    deposits: [
      {
        id: 'DP-20260313-0001',
        customerId: 'u1',
        amount: 200000,
        coin: 200000,
        status: 'approved',
        note: 'NAP MINHANH 200000',
        createdAt: '13/03/2026 11:00'
      },
      {
        id: 'DP-20260315-0001',
        customerId: 'u2',
        amount: 100000,
        coin: 100000,
        status: 'pending',
        note: 'NAP GIABAO 100000',
        createdAt: '15/03/2026 09:40'
      }
    ],
    chats: [
      {
        customerId: 'u1',
        messages: [
          { sender: 'customer', text: 'Bên mình muốn tối ưu lại trang dịch vụ để nhìn gọn hơn trên điện thoại.', time: '15/03/2026 08:30' },
          { sender: 'admin', text: 'Đã rõ. Em sẽ tách các mục lớn thành từng trang riêng để dùng mượt hơn.', time: '15/03/2026 08:36' }
        ]
      },
      {
        customerId: 'u2',
        messages: [
          { sender: 'customer', text: 'Cho mình hỏi khi nào duyệt lệnh nạp coin?', time: '15/03/2026 09:50' }
        ]
      }
    ]
  };
}

function readDb() {
  if (!fs.existsSync(dbPath)) {
    const db = seedDb();
    writeDb(db);
    return db;
  }
  return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
}

function writeDb(db) {
  db.meta = db.meta || {};
  db.meta.updatedAt = new Date().toISOString();
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

function safeUser(user) {
  if (!user) return null;
  const { passwordHash, ...rest } = user;
  return rest;
}

function safeState(db, actor = null) {
  const base = {
    company: db.company,
    payment: db.payment,
    integration: actor && ['admin','accountant'].includes(actor.role) ? db.integration : {
      enabled: db.integration.enabled,
      endpoint: db.integration.endpoint,
      authType: db.integration.authType,
      servicePath: db.integration.servicePath,
      nameField: db.integration.nameField,
      categoryField: db.integration.categoryField,
      priceField: db.integration.priceField,
      unitField: db.integration.unitField,
      descriptionField: db.integration.descriptionField,
      tagsField: db.integration.tagsField,
      featuredField: db.integration.featuredField,
      statusField: db.integration.statusField,
      syncEveryMinutes: db.integration.syncEveryMinutes,
      webhookSecret: db.integration.webhookSecret
    },
    services: db.services,
    orders: db.orders,
    deposits: db.deposits,
    chats: db.chats,
    users: db.users.map(safeUser),
    reports: {
      excelUrl: '/api/reports/export.xlsx',
      pdfUrl: '/api/reports/export.pdf'
    }
  };
  if (!actor) {
    return {
      company: db.company,
      payment: db.payment,
      services: db.services.filter(item => item.status === 'active')
    };
  }
  return base;
}

function createToken(user) {
  return jwt.sign({ id: user.id, role: user.role, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
}

function parseActor(req) {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) return null;
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const db = readDb();
    return db.users.find(item => item.id === payload.id) || null;
  } catch {
    return null;
  }
}

function nowVN() {
  return new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
}

function requireAuth(req, res, next) {
  const actor = parseActor(req);
  if (!actor) return res.status(401).json({ message: 'Bạn cần đăng nhập.' });
  req.actor = actor;
  req.db = readDb();
  next();
}

function requireRoles(...roles) {
  return (req, res, next) => {
    const actor = req.actor || parseActor(req);
    if (!actor) return res.status(401).json({ message: 'Bạn cần đăng nhập.' });
    if (!roles.includes(actor.role)) return res.status(403).json({ message: 'Bạn không có quyền truy cập chức năng này.' });
    req.actor = actor;
    req.db = req.db || readDb();
    next();
  };
}

function nextCode(prefix, items) {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const count = items.filter(item => String(item.id || '').includes(datePart)).length + 1;
  return `${prefix}-${datePart}-${String(count).padStart(4, '0')}`;
}

function findCustomerThread(db, customerId) {
  let thread = db.chats.find(item => item.customerId === customerId);
  if (!thread) {
    thread = { customerId, messages: [] };
    db.chats.push(thread);
  }
  return thread;
}

function mergeCustomerState(prev, incoming, actor) {
  const db = JSON.parse(JSON.stringify(prev));
  const currentUser = db.users.find(item => item.id === actor.id);
  const incomingUser = (incoming.users || []).find(item => item.id === actor.id) || {};
  ['fullName','email','phone','address','bio','avatar'].forEach(key => {
    if (typeof incomingUser[key] === 'string') currentUser[key] = incomingUser[key];
  });

  const prevOrderIds = new Set(prev.orders.filter(item => item.customerId === actor.id).map(item => item.id));
  (incoming.orders || []).forEach(order => {
    if (order.customerId !== actor.id || prevOrderIds.has(order.id)) return;
    const service = db.services.find(item => item.id === order.serviceId);
    const quantity = Math.max(1, Number(order.quantity || 1));
    const expectedTotal = Number(service?.price || 0) * quantity;
    if (!service || service.status !== 'active' || expectedTotal <= 0 || currentUser.balance < expectedTotal) return;
    currentUser.balance -= expectedTotal;
    db.orders.unshift({
      id: nextCode('OD', db.orders),
      customerId: actor.id,
      serviceId: service.id,
      serviceName: service.name,
      quantity,
      totalCoin: expectedTotal,
      note: String(order.note || '').trim(),
      status: 'pending',
      createdAt: nowVN()
    });
  });

  const prevDepositIds = new Set(prev.deposits.filter(item => item.customerId === actor.id).map(item => item.id));
  (incoming.deposits || []).forEach(deposit => {
    if (deposit.customerId !== actor.id || prevDepositIds.has(deposit.id)) return;
    const amount = Math.max(0, Number(deposit.amount || 0));
    if (!amount) return;
    db.deposits.unshift({
      id: nextCode('DP', db.deposits),
      customerId: actor.id,
      amount,
      coin: amount,
      status: 'pending',
      note: String(deposit.note || `NAP ${actor.username.toUpperCase()} ${amount}`).trim(),
      createdAt: nowVN()
    });
  });

  const prevThread = findCustomerThread(prev, actor.id);
  const nextThread = findCustomerThread(db, actor.id);
  const incomingThread = (incoming.chats || []).find(item => item.customerId === actor.id) || { messages: [] };
  const prevCount = prevThread.messages.length;
  incomingThread.messages.slice(prevCount).forEach(message => {
    if (message.sender !== 'customer') return;
    const text = String(message.text || '').trim();
    if (!text) return;
    nextThread.messages.push({ sender: 'customer', text, time: nowVN() });
  });
  return db;
}

function mergeSupportState(prev, incoming, actor) {
  const db = JSON.parse(JSON.stringify(prev));
  (incoming.chats || []).forEach(thread => {
    const target = findCustomerThread(db, thread.customerId);
    const sourcePrev = findCustomerThread(prev, thread.customerId);
    thread.messages.slice(sourcePrev.messages.length).forEach(message => {
      if (message.sender !== 'admin') return;
      const text = String(message.text || '').trim();
      if (!text) return;
      target.messages.push({ sender: 'admin', text, time: nowVN(), staffRole: actor.role });
    });
  });
  return db;
}

function recalcApprovedCredits(db, previousDepositsMap) {
  for (const deposit of db.deposits) {
    const before = previousDepositsMap.get(deposit.id);
    const turnedApproved = deposit.status === 'approved' && (!before || before.status !== 'approved');
    if (turnedApproved) {
      const user = db.users.find(item => item.id === deposit.customerId);
      if (user) user.balance += Number(deposit.coin || 0);
    }
  }
}

function mergeAccountantState(prev, incoming) {
  const db = JSON.parse(JSON.stringify(prev));
  db.payment = { ...db.payment, ...(incoming.payment || {}) };
  const incomingDeposits = new Map((incoming.deposits || []).map(item => [item.id, item]));
  for (const deposit of db.deposits) {
    const next = incomingDeposits.get(deposit.id);
    if (!next) continue;
    if (['pending','approved','rejected'].includes(next.status)) deposit.status = next.status;
    if (typeof next.note === 'string') deposit.note = next.note;
  }
  recalcApprovedCredits(db, new Map(prev.deposits.map(item => [item.id, item])));
  return db;
}

function mergeAdminState(prev, incoming) {
  const db = JSON.parse(JSON.stringify(prev));
  db.company = { ...db.company, ...(incoming.company || {}) };
  db.payment = { ...db.payment, ...(incoming.payment || {}) };
  db.integration = { ...db.integration, ...(incoming.integration || {}) };

  const prevUsersMap = new Map(prev.users.map(item => [item.id, item]));
  db.users = (incoming.users || []).map(user => {
    const before = prevUsersMap.get(user.id) || {};
    return { ...before, ...user, passwordHash: before.passwordHash };
  });

  db.services = (incoming.services || []).map(service => {
    const before = prev.services.find(item => item.id === service.id) || {};
    return {
      ...before,
      ...service,
      image: service.image || before.image || '',
      tags: Array.isArray(service.tags) ? service.tags : String(service.tags || '').split(',').map(item => item.trim()).filter(Boolean),
      createdAt: before.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  });

  db.orders = Array.isArray(incoming.orders) ? incoming.orders : db.orders;
  db.deposits = Array.isArray(incoming.deposits) ? incoming.deposits : db.deposits;
  db.chats = Array.isArray(incoming.chats) ? incoming.chats : db.chats;

  recalcApprovedCredits(db, new Map(prev.deposits.map(item => [item.id, item])));
  return db;
}

async function syncExternalServices(db) {
  const cfg = db.integration || {};
  if (!cfg.enabled || !cfg.endpoint) return { changed: 0, skipped: true };
  const headers = { Accept: 'application/json' };
  if (cfg.apiKey) {
    if (cfg.authType === 'x-api-key') headers['x-api-key'] = cfg.apiKey;
    else headers.Authorization = `Bearer ${cfg.apiKey}`;
  }
  const response = await fetch(cfg.endpoint, { headers });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const payload = await response.json();
  const getNested = (obj, inputPath) => String(inputPath || '').split('.').filter(Boolean).reduce((acc, key) => (acc && typeof acc === 'object') ? acc[key] : undefined, obj);
  const list = cfg.servicePath ? (getNested(payload, cfg.servicePath) || []) : payload;
  if (!Array.isArray(list)) throw new Error('Không tìm thấy mảng dịch vụ hợp lệ');
  let changed = 0;
  list.forEach((item, index) => {
    const name = String(getNested(item, cfg.nameField) || '').trim();
    if (!name) return;
    const externalId = String(getNested(item, 'id') || `${name}-${index}`);
    const existing = db.services.find(service => service.externalId === externalId);
    const nextService = {
      id: existing?.id || `sv${Date.now()}${index}`,
      externalId,
      source: 'external-api',
      name,
      category: String(getNested(item, cfg.categoryField) || 'Dịch vụ API').trim(),
      price: Number(getNested(item, cfg.priceField) || 0),
      unit: String(getNested(item, cfg.unitField) || 'gói').trim(),
      description: String(getNested(item, cfg.descriptionField) || 'Dịch vụ đồng bộ từ hệ thống ngoài.').trim(),
      image: existing?.image || '',
      tags: Array.isArray(getNested(item, cfg.tagsField)) ? getNested(item, cfg.tagsField) : String(getNested(item, cfg.tagsField) || '').split(',').map(tag => tag.trim()).filter(Boolean),
      featured: ['true','1','yes'].includes(String(getNested(item, cfg.featuredField) || '').toLowerCase()) || !!getNested(item, cfg.featuredField),
      status: String(getNested(item, cfg.statusField) || 'active').trim() || 'active',
      createdAt: existing?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    if (existing) Object.assign(existing, nextService);
    else db.services.unshift(nextService);
    changed += 1;
  });
  db.meta.syncRunAt = new Date().toISOString();
  writeDb(db);
  return { changed, skipped: false };
}

const app = express();
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(cookieParser());

app.use('/assets', express.static(path.join(projectRoot, 'assets')));
app.use('/auth', express.static(path.join(projectRoot, 'auth')));
app.use('/admin', express.static(path.join(projectRoot, 'admin')));
app.use('/customer', express.static(path.join(projectRoot, 'customer')));
app.get('/index.html', (req, res) => res.sendFile(path.join(projectRoot, 'index.html')));
app.get('/', (req, res) => res.sendFile(path.join(projectRoot, 'index.html')));
app.get('/favicon.ico', (req, res) => res.sendFile(path.join(projectRoot, 'assets', 'logo.svg')));

app.get('/api/public', (req, res) => {
  const db = readDb();
  res.json({ state: safeState(db, null), currentUser: safeUser(parseActor(req)), permissions: [] });
});

app.get('/api/bootstrap', (req, res) => {
  const db = readDb();
  const actor = parseActor(req);
  res.json({ state: safeState(db, actor), currentUser: safeUser(actor), permissions: actor ? rolePermissions[actor.role] || [] : [] });
});

app.get('/api/auth/me', (req, res) => {
  const actor = parseActor(req);
  if (!actor) return res.status(401).json({ message: 'Chưa đăng nhập.' });
  res.json({ user: safeUser(actor), permissions: rolePermissions[actor.role] || [] });
});

app.post('/api/auth/login', (req, res) => {
  const { identifier, password } = req.body || {};
  const db = readDb();
  const user = db.users.find(item => [item.username.toLowerCase(), item.email.toLowerCase()].includes(String(identifier || '').trim().toLowerCase()));
  if (!user || !bcrypt.compareSync(String(password || ''), user.passwordHash)) {
    return res.status(400).json({ message: 'Sai thông tin đăng nhập.' });
  }
  const token = createToken(user);
  res.cookie(COOKIE_NAME, token, { httpOnly: true, sameSite: 'lax', maxAge: 7 * 24 * 3600 * 1000 });
  res.json({ user: safeUser(user), permissions: rolePermissions[user.role] || [] });
});

app.post('/api/auth/register', (req, res) => {
  const db = readDb();
  const body = req.body || {};
  const username = String(body.username || '').trim();
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');
  if (!username || !email || !password) return res.status(400).json({ message: 'Thiếu thông tin đăng ký.' });
  const exists = db.users.some(user => user.username.toLowerCase() === username.toLowerCase() || user.email.toLowerCase() === email);
  if (exists) return res.status(400).json({ message: 'Username hoặc email đã tồn tại.' });
  const user = {
    id: `u${Date.now()}`,
    role: 'customer',
    username,
    email,
    fullName: String(body.fullName || '').trim(),
    phone: String(body.phone || '').trim(),
    address: String(body.address || '').trim(),
    balance: 0,
    bio: '',
    avatar: '',
    status: 'active',
    passwordHash: bcrypt.hashSync(password, 10)
  };
  db.users.push(user);
  writeDb(db);
  const token = createToken(user);
  res.cookie(COOKIE_NAME, token, { httpOnly: true, sameSite: 'lax', maxAge: 7 * 24 * 3600 * 1000 });
  res.json({ user: safeUser(user), permissions: rolePermissions[user.role] || [] });
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.json({ ok: true });
});

app.post('/api/state', requireAuth, (req, res) => {
  const prev = req.db;
  const incoming = req.body?.state;
  if (!incoming || typeof incoming !== 'object') return res.status(400).json({ message: 'Dữ liệu không hợp lệ.' });
  let next;
  if (req.actor.role === 'admin') next = mergeAdminState(prev, incoming);
  else if (req.actor.role === 'support') next = mergeSupportState(prev, incoming, req.actor);
  else if (req.actor.role === 'accountant') next = mergeAccountantState(prev, incoming);
  else next = mergeCustomerState(prev, incoming, req.actor);
  writeDb(next);
  const actor = next.users.find(item => item.id === req.actor.id) || req.actor;
  res.json({ ok: true, state: safeState(next, actor), currentUser: safeUser(actor), permissions: rolePermissions[actor.role] || [] });
});

app.post('/api/services/:id/delete', requireAuth, requireRoles('admin'), (req, res) => {
  const db = req.db;
  db.services = db.services.filter(item => item.id !== req.params.id);
  writeDb(db);
  res.json({ ok: true });
});

app.post('/api/deposits/:id/approve', requireAuth, requireRoles('admin','accountant'), (req, res) => {
  const db = req.db;
  const deposit = db.deposits.find(item => item.id === req.params.id);
  if (!deposit) return res.status(404).json({ message: 'Không tìm thấy lệnh nạp.' });
  if (deposit.status !== 'approved') {
    deposit.status = 'approved';
    const customer = db.users.find(item => item.id === deposit.customerId);
    if (customer) customer.balance += Number(deposit.coin || 0);
  }
  writeDb(db);
  res.json({ ok: true });
});

app.post('/api/deposits/:id/reject', requireAuth, requireRoles('admin','accountant'), (req, res) => {
  const db = req.db;
  const deposit = db.deposits.find(item => item.id === req.params.id);
  if (!deposit) return res.status(404).json({ message: 'Không tìm thấy lệnh nạp.' });
  deposit.status = 'rejected';
  writeDb(db);
  res.json({ ok: true });
});

app.post('/api/integrations/sync', requireAuth, requireRoles('admin'), async (req, res) => {
  try {
    const db = req.db;
    const result = await syncExternalServices(db);
    res.json({ ok: true, ...result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/api/webhooks/service-sync', async (req, res) => {
  try {
    const db = readDb();
    const secret = req.headers['x-webhook-secret'] || req.body?.secret;
    if (db.integration.webhookSecret && secret !== db.integration.webhookSecret) {
      return res.status(403).json({ message: 'Webhook secret không hợp lệ.' });
    }
    const result = await syncExternalServices(db);
    res.json({ ok: true, ...result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/reports/export.xlsx', requireAuth, requireRoles('admin','accountant'), async (req, res) => {
  const db = req.db;
  const workbook = new ExcelJS.Workbook();
  const customersSheet = workbook.addWorksheet('Khach hang');
  customersSheet.columns = [
    { header: 'ID', key: 'id', width: 20 },
    { header: 'Ho ten', key: 'fullName', width: 24 },
    { header: 'Username', key: 'username', width: 18 },
    { header: 'Email', key: 'email', width: 28 },
    { header: 'Phone', key: 'phone', width: 16 },
    { header: 'Balance', key: 'balance', width: 14 },
    { header: 'Role', key: 'role', width: 14 }
  ];
  db.users.forEach(user => customersSheet.addRow(safeUser(user)));
  const ordersSheet = workbook.addWorksheet('Don hang');
  ordersSheet.columns = [
    { header: 'Ma don', key: 'id', width: 22 },
    { header: 'Khach hang', key: 'customerId', width: 18 },
    { header: 'Dich vu', key: 'serviceName', width: 30 },
    { header: 'So luong', key: 'quantity', width: 12 },
    { header: 'Tong coin', key: 'totalCoin', width: 14 },
    { header: 'Trang thai', key: 'status', width: 14 },
    { header: 'Thoi gian', key: 'createdAt', width: 22 }
  ];
  db.orders.forEach(order => ordersSheet.addRow(order));
  const depositsSheet = workbook.addWorksheet('Nap tien');
  depositsSheet.columns = [
    { header: 'Ma nap', key: 'id', width: 22 },
    { header: 'Khach hang', key: 'customerId', width: 18 },
    { header: 'So tien', key: 'amount', width: 14 },
    { header: 'Coin', key: 'coin', width: 14 },
    { header: 'Trang thai', key: 'status', width: 14 },
    { header: 'Noi dung', key: 'note', width: 32 },
    { header: 'Thoi gian', key: 'createdAt', width: 22 }
  ];
  db.deposits.forEach(item => depositsSheet.addRow(item));
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename="pth-report.xlsx"');
  await workbook.xlsx.write(res);
  res.end();
});

app.get('/api/reports/export.pdf', requireAuth, requireRoles('admin','accountant'), (req, res) => {
  const db = req.db;
  const doc = new PDFDocument({ margin: 36 });
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="pth-report.pdf"');
  doc.pipe(res);
  doc.fontSize(18).text('PTH DIGITAL - Bao cao tong hop');
  doc.moveDown();
  doc.fontSize(11).text(`Ngay xuat: ${nowVN()}`);
  doc.moveDown();
  doc.fontSize(13).text('Tong quan');
  doc.fontSize(11).text(`So khach hang: ${db.users.filter(u => u.role === 'customer').length}`);
  doc.text(`So dich vu: ${db.services.length}`);
  doc.text(`So don hang: ${db.orders.length}`);
  doc.text(`So lenh nap: ${db.deposits.length}`);
  doc.moveDown();
  doc.fontSize(13).text('Lenh nap gan day');
  db.deposits.slice(0, 10).forEach(item => {
    doc.fontSize(10).text(`${item.id} | ${item.customerId} | ${item.amount} VND | ${item.status} | ${item.createdAt}`);
  });
  doc.moveDown();
  doc.fontSize(13).text('Don hang gan day');
  db.orders.slice(0, 10).forEach(item => {
    doc.fontSize(10).text(`${item.id} | ${item.serviceName} | ${item.totalCoin} coin | ${item.status} | ${item.createdAt}`);
  });
  doc.end();
});

cron.schedule('*/15 * * * *', async () => {
  try {
    const db = readDb();
    const minutes = Number(db.integration.syncEveryMinutes || 60);
    const lastRun = db.meta.syncRunAt ? new Date(db.meta.syncRunAt).getTime() : 0;
    const due = Date.now() - lastRun >= minutes * 60 * 1000;
    if (db.integration.enabled && db.integration.endpoint && due) await syncExternalServices(db);
  } catch (error) {
    console.error('Cron sync failed:', error.message);
  }
});

app.listen(PORT, () => {
  console.log(`PTH DIGITAL backend running at http://localhost:${PORT}`);
});
