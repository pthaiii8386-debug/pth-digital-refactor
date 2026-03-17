const STORAGE_KEY = 'pthDigitalEnterprise';
const LEGACY_STORAGE_KEYS = ['pthDigitalEnterpriseV6','pthDigitalEnterpriseV5','pthDigitalEnterpriseV4','pthDigitalEnterpriseV3'];
const CURRENT_USER_KEY = 'pthDigitalCurrentUser';
const CONFIG_SYNC_VERSION = '2026-03-16-company-payment-v3';

const DEFAULT_STATE = {
  company: {
    name: 'PTH DIGITAL',
    slogan: 'Nền tảng dịch vụ số chuyên nghiệp cho doanh nghiệp',
    about: 'PTH DIGITAL là nền tảng số hỗ trợ doanh nghiệp quản lý thông tin dịch vụ, thanh toán và thương hiệu một cách rõ ràng, chuyên nghiệp và hiệu quả. Website được xây dựng nhằm mang đến trải nghiệm thuận tiện cho khách hàng với giao diện dễ sử dụng, thông tin minh bạch và quy trình thao tác nhanh gọn. Chúng tôi luôn đặt uy tín, chất lượng và sự hài lòng của khách hàng làm trọng tâm để tạo nên giá trị bền vững và niềm tin lâu dài.',
    adminName: 'THANH HẢI',
    adminTitle: 'Founder & Digital Operations Lead',
    supportEmail: 'support@pthdigital.vn',
    supportTelegram: 'https://t.me/Mmo_white',
    supportPhone: '0901 234 567',
    address: 'Quảng Trị, Việt Nam',
    trustText: 'Khách hàng trao niềm tin, chúng tôi trao giá trị.\n\nUy tín làm nên thương hiệu, niềm tin làm nên thành công.\n\nMỗi sản phẩm là một cam kết, mỗi khách hàng là một niềm tin.'
  },
  payment: {
    bankName: 'MB BANK',
    accountName: 'PHAM THANH HAI',
    accountNumber: '9201283869999',
    minDeposit: 20000,
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
    statusField: 'status'
  },
  users: [
    {
      id: 'admin',
      role: 'admin',
      username: 'admin',
      password: 'Admin@123',
      fullName: 'THANH HẢI',
      email: 'admin@pthdigital.vn',
      phone: '0901 234 567',
      address: 'Quảng Trị, Việt Nam',
      balance: 0,
      bio: 'Tài khoản quản trị hệ thống.',
      avatar: ''
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
      avatar: ''
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
      avatar: ''
    }
  ],
  services: [
    {
      id: 'sv1',
      name: 'Thiết kế landing page doanh nghiệp',
      category: 'Website',
      price: 120000,
      unit: 'gói',
      description: 'Thiết kế landing page chuyên nghiệp, giao diện rõ ràng cho dịch vụ doanh nghiệp.',
      tags: ['UI hiện đại', 'Responsive', 'Chuẩn doanh nghiệp'],
      featured: true,
      status: 'active'
    },
    {
      id: 'sv2',
      name: 'Quản trị fanpage & nội dung social',
      category: 'Social',
      price: 90000,
      unit: 'tháng',
      description: 'Lên lịch nội dung, concept, chăm sóc trang để thương hiệu hoạt động đều hơn.',
      tags: ['Content plan', 'Fanpage', 'Tối ưu hiện diện'],
      featured: true,
      status: 'active'
    },
    {
      id: 'sv3',
      name: 'SEO tổng thể website',
      category: 'SEO',
      price: 150000,
      unit: 'tháng',
      description: 'Tối ưu cấu trúc, nội dung và từ khóa để website có nền tảng tăng trưởng lâu dài.',
      tags: ['Keyword', 'Technical SEO', 'Content hub'],
      featured: true,
      status: 'active'
    },
    {
      id: 'sv4',
      name: 'Thiết lập live chat & kịch bản CSKH',
      category: 'Support',
      price: 70000,
      unit: 'gói',
      description: 'Thiết kế luồng chăm sóc, trả lời nhanh và hướng dẫn CSKH rõ ràng hơn.',
      tags: ['Chat flow', 'CSKH', 'Kịch bản'],
      featured: false,
      status: 'active'
    },
    {
      id: 'sv5',
      name: 'Báo cáo hiệu quả chiến dịch hàng tháng',
      category: 'Report',
      price: 50000,
      unit: 'bộ',
      description: 'Mẫu báo cáo trực quan, dễ hiểu để trình khách hàng hoặc nội bộ.',
      tags: ['KPI', 'Dashboard', 'Report'],
      featured: false,
      status: 'active'
    }
  ],
  orders: [
    {
      id: 'OD-1001',
      customerId: 'u1',
      serviceId: 'sv2',
      serviceName: 'Quản trị fanpage & nội dung social',
      quantity: 1,
      totalCoin: 90000,
      note: 'Theo gói tiêu chuẩn',
      status: 'completed',
      createdAt: '14/03/2026 09:20'
    },
    {
      id: 'OD-1002',
      customerId: 'u2',
      serviceId: 'sv1',
      serviceName: 'Thiết kế landing page doanh nghiệp',
      quantity: 1,
      totalCoin: 120000,
      note: 'Ưu tiên giao diện bán hàng',
      status: 'pending',
      createdAt: '15/03/2026 08:10'
    }
  ],
  deposits: [
    {
      id: 'DP-2001',
      customerId: 'u1',
      amount: 200000,
      coin: 200000,
      status: 'approved',
      note: 'NAP MINHANH 200000',
      createdAt: '13/03/2026 11:00'
    },
    {
      id: 'DP-2002',
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

const CUSTOMER_NAV = [
  { href: 'index.html', label: 'Tổng quan', icon: '🏠' },
  { href: 'services.html', label: 'Dịch vụ', icon: '🧩' },
  { href: 'wallet.html', label: 'Ví coin', icon: '💳' },
  { href: 'history.html', label: 'Lịch sử', icon: '📋' },
  { href: 'profile.html', label: 'Hồ sơ', icon: '👤' },
  { href: 'support.html', label: 'Live chat', icon: '💬' }
];

const ADMIN_NAV = [
  { href: 'index.html', key: 'admin-overview', label: 'Tổng quan', icon: '📊' },
  { href: 'services.html', key: 'admin-services', label: 'Dịch vụ', icon: '🧩' },
  { href: 'customers.html', key: 'admin-customers', label: 'Khách hàng', icon: '👥' },
  { href: 'payment.html', key: 'admin-payment', label: 'Thanh toán', icon: '💳' },
  { href: 'chat.html', key: 'admin-chat', label: 'Live chat', icon: '💬' },
  { href: 'settings.html', key: 'admin-settings', label: 'Doanh nghiệp', icon: '⚙️' }
];

let APP_PERMISSIONS = [];

function getPage() {
  return document.body.dataset.page || 'entry';
}

function isRootPage() {
  return getPage() === 'entry';
}

function rootPrefix() {
  return isRootPage() ? '' : '../';
}

function routeTo(path) {
  return `${rootPrefix()}${path}`;
}

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

let APP_STATE = null;
let APP_USER = null;
let BOOTSTRAP_PROMISE = null;

function authPath() {
  return (document.body.dataset.page || '') === 'home' ? 'auth/index.html' : '../auth/index.html';
}

async function apiRequest(url, options = {}) {
  const response = await fetch(url, {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...(options.headers || {})
    },
    ...options
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Yêu cầu thất bại.');
  }
  return data;
}

async function bootstrapState(force = false) {
  if (BOOTSTRAP_PROMISE && !force) return BOOTSTRAP_PROMISE;

  BOOTSTRAP_PROMISE = apiRequest('/api/bootstrap')
    .then(payload => {
      APP_STATE = payload.state || cloneDefaultState();
      APP_USER = payload.currentUser || null;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(APP_STATE));
      if (APP_USER?.username) {
        localStorage.setItem(CURRENT_USER_KEY, APP_USER.username);
      } else {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
      return payload;
    })
    .catch(() => {
      const raw = localStorage.getItem(STORAGE_KEY);
      APP_STATE = raw ? JSON.parse(raw) : cloneDefaultState();

      const username = localStorage.getItem(CURRENT_USER_KEY);
      APP_USER = username
        ? APP_STATE.users.find(user => user.username === username) || null
        : null;

      return { state: APP_STATE, currentUser: APP_USER };
    })
    .finally(() => {
      BOOTSTRAP_PROMISE = null;
    });

  return BOOTSTRAP_PROMISE;
}

function getState() {
  if (APP_STATE) return APP_STATE;

  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    APP_STATE = cloneDefaultState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(APP_STATE));
    return APP_STATE;
  }

  try {
    APP_STATE = JSON.parse(raw);
    return APP_STATE;
  } catch (error) {
    APP_STATE = cloneDefaultState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(APP_STATE));
    return APP_STATE;
  }
}

function saveState(state) {
  APP_STATE = JSON.parse(JSON.stringify(state));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(APP_STATE));

  if (!APP_USER) return Promise.resolve(APP_STATE);

  return apiRequest('/api/state', {
    method: 'POST',
    body: JSON.stringify({ state: APP_STATE })
  })
    .then(payload => {
      APP_STATE = payload.state || APP_STATE;
      APP_USER = payload.currentUser || APP_USER;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(APP_STATE));
      if (APP_USER?.username) {
        localStorage.setItem(CURRENT_USER_KEY, APP_USER.username);
      }
      return APP_STATE;
    })
    .catch(error => {
      console.error('Lỗi đồng bộ state:', error);
      return APP_STATE;
    });
}

function getCurrentUser() {
  if (APP_USER) return APP_USER;

  const username = localStorage.getItem(CURRENT_USER_KEY);
  if (!username) return null;

  const state = getState();
  APP_USER = state.users.find(user => user.username === username) || null;
  return APP_USER;
}

function setCurrentUser(username) {
  const state = getState();
  APP_USER = state.users.find(user => user.username === username) || null;
  if (APP_USER?.username) {
    localStorage.setItem(CURRENT_USER_KEY, APP_USER.username);
  }
}

function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
  APP_USER = null;
  fetch('/api/auth/logout', {
    method: 'POST',
    credentials: 'include'
  }).catch(() => {});
  window.location.href = authPath();
}

function nowString() {
  return new Date().toLocaleString('vi-VN');
}

function formatCurrency(value) {
  return `${Number(value || 0).toLocaleString('vi-VN')} coin`;
}

function formatMoney(value) {
  return `${Number(value || 0).toLocaleString('vi-VN')} VND`;
}

function initials(name) {
  return String(name || 'KH').trim().split(/\s+/).slice(0, 2).map(item => item[0]?.toUpperCase() || '').join('');
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
}

function getNestedValue(obj, path) {
  return String(path || '').split('.').filter(Boolean).reduce((acc, key) => (acc && typeof acc === 'object') ? acc[key] : undefined, obj);
}

function rerenderPage() {
  const page = getPage();
  if (page.startsWith('admin')) return renderAdminCurrentPage();
  window.location.reload();
}

function statusBadge(status) {
  const map = {
    approved: ['success', 'Đã duyệt'],
    completed: ['success', 'Hoàn thành'],
    active: ['success', 'Đang bật'],
    pending: ['warning', 'Chờ xử lý'],
    processing: ['info', 'Đang xử lý'],
    need_info: ['warning', 'Cần bổ sung'],
    refunded: ['success', 'Hoàn coin'],
    inactive: ['danger', 'Đang ẩn'],
    rejected: ['danger', 'Từ chối']
  };
  const item = map[status] || ['warning', String(status || 'Đang xử lý')];
  return `<span class="badge ${item[0]}">${item[1]}</span>`;
}

function priorityBadge(level) {
  const map = {
    urgent: ['danger', 'Ưu tiên cao'],
    medium: ['warning', 'Cần theo dõi'],
    low: ['success', 'Ổn định']
  };
  const item = map[level] || map.medium;
  return `<span class="badge ${item[0]}">${item[1]}</span>`;
}

function activeServices(state) {
  return state.services.filter(service => service.status === 'active');
}

function serviceById(state, id) {
  return state.services.find(service => service.id === id);
}

function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 2600);
}

function setButtonBusy(button, busy, busyText = 'Đang xử lý...') {
  if (!button) return;

  if (busy) {
    if (!button.dataset.originalHtml) {
      button.dataset.originalHtml = button.innerHTML;
    }
    button.disabled = true;
    button.classList.add('is-busy');
    button.innerHTML = busyText;
    return;
  }

  button.disabled = false;
  button.classList.remove('is-busy');

  if (button.dataset.originalHtml) {
    button.innerHTML = button.dataset.originalHtml;
  }
}

function refreshCurrentView() {
  window.location.reload();
}

function makeOrderCode() {
  return `DH-${Date.now()}`;
}

function pushOrderTimeline(order, action, actor = 'system', note = '') {
  if (!order.timeline) order.timeline = [];
  order.timeline.unshift({
    action,
    actor,
    note,
    createdAt: new Date().toLocaleString('vi-VN')
  });
}

function ensureChatThread(state, customerId) {
  let thread = state.chats.find(item => item.customerId === customerId);
  if (!thread) {
    thread = { customerId, messages: [] };
    state.chats.push(thread);
  }
  return thread;
}

function addSystemMessageToChat(state, customerId, text) {
  const thread = ensureChatThread(state, customerId);
  thread.messages.push({
    sender: 'admin',
    text,
    time: new Date().toLocaleString('vi-VN')
  });
}

function orderStatusMeta(status) {
  const map = {
    pending: { label: 'Chờ xử lý', className: 'warning' },
    processing: { label: 'Đang xử lý', className: 'info' },
    need_info: { label: 'Cần bổ sung', className: 'warning' },
    completed: { label: 'Hoàn thành', className: 'success' },
    refunded: { label: 'Hoàn coin', className: 'success' },
    rejected: { label: 'Từ chối', className: 'danger' }
  };
  return map[status] || { label: status || 'Không rõ', className: 'muted' };
}

function formatOrderStatus(status) {
  return orderStatusMeta(status).label;
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(String(text || ''));
    showToast('Đã sao chép.', 'success');
  } catch {
    showToast('Không sao chép được.', 'error');
  }
}

function setButtonBusy(button, busy, busyText = 'Đang xử lý...') {
  if (!button) return;

  if (busy) {
    if (!button.dataset.originalHtml) {
      button.dataset.originalHtml = button.innerHTML;
    }
    button.disabled = true;
    button.classList.add('is-busy');
    button.innerHTML = busyText;
    return;
  }

  button.disabled = false;
  button.classList.remove('is-busy');

  if (button.dataset.originalHtml) {
    button.innerHTML = button.dataset.originalHtml;
  }
}

function refreshCurrentView() {
  window.location.reload();
}

let mobileUiBound = false;

function setupMobileEnterpriseUI() {
  if (mobileUiBound) return;
  mobileUiBound = true;

  const body = document.body;
  const headerBar = document.querySelector('.topbar, .navbar');
  if (!headerBar) return;

  let backdrop = document.querySelector('.mobile-drawer-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-drawer-backdrop';
    document.body.appendChild(backdrop);
  }

  const closeAllDrawers = () => {
    body.classList.remove('drawer-open');
    body.classList.remove('home-drawer-open');
  };

  const bindBackdrop = () => {
    if (backdrop.dataset.bound === '1') return;
    backdrop.dataset.bound = '1';
    backdrop.addEventListener('click', closeAllDrawers);
  };

  bindBackdrop();

  const ensureMenuButton = (mode = 'sidebar') => {
    let toggle = headerBar.querySelector('.mobile-menu-toggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'mobile-menu-toggle';
      toggle.setAttribute('aria-label', 'Mở menu');
      toggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
      `;
      headerBar.insertBefore(toggle, headerBar.firstChild);
    }

    if (toggle.dataset.bound !== '1') {
      toggle.dataset.bound = '1';
      toggle.addEventListener('click', () => {
        if (mode === 'home') {
          body.classList.add('home-drawer-open');
        } else {
          body.classList.add('drawer-open');
        }
      });
    }
  };

  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    ensureMenuButton('sidebar');

    if (!sidebar.querySelector('.mobile-drawer-close')) {
      const closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'mobile-drawer-close';
      closeBtn.setAttribute('aria-label', 'Đóng menu');
      closeBtn.textContent = '×';
      sidebar.insertBefore(closeBtn, sidebar.firstChild);
      closeBtn.addEventListener('click', closeAllDrawers);
    }

    sidebar.querySelectorAll('a').forEach(link => {
      if (link.dataset.mobileCloseBound === '1') return;
      link.dataset.mobileCloseBound = '1';
      link.addEventListener('click', () => {
        closeAllDrawers();
      });
    });
  } else {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      ensureMenuButton('home');

      let homeDrawer = document.querySelector('.home-mobile-drawer');
      if (!homeDrawer) {
        homeDrawer = document.createElement('aside');
        homeDrawer.className = 'home-mobile-drawer';
        homeDrawer.innerHTML = `
          <div class="home-mobile-drawer-head">
            <strong>Menu</strong>
            <button type="button" class="mobile-drawer-close" aria-label="Đóng menu">×</button>
          </div>
          <div class="nav-stack home-mobile-drawer-links"></div>
        `;
        document.body.appendChild(homeDrawer);

        const closeBtn = homeDrawer.querySelector('.mobile-drawer-close');
        closeBtn.addEventListener('click', closeAllDrawers);
      }

      const drawerLinks = homeDrawer.querySelector('.home-mobile-drawer-links');
      drawerLinks.innerHTML = navLinks.innerHTML;

      drawerLinks.querySelectorAll('a').forEach(link => {
        if (link.dataset.mobileCloseBound === '1') return;
        link.dataset.mobileCloseBound = '1';
        link.addEventListener('click', () => {
          closeAllDrawers();
        });
      });
    }
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      closeAllDrawers();
    }
  });
}

function setButtonBusy(button, busy, busyText = 'Đang xử lý...') {
  if (!button) return;
  if (busy) {
    if (!button.dataset.originalHtml) {
      button.dataset.originalHtml = button.innerHTML;
    }
    button.disabled = true;
    button.classList.add('is-busy');
    button.innerHTML = busyText;
    return;
  }
  button.disabled = false;
  button.classList.remove('is-busy');
  if (button.dataset.originalHtml) {
    button.innerHTML = button.dataset.originalHtml;
  }
}

function refreshCurrentView() {
  const page = document.body?.dataset?.page || '';
  if (page.startsWith('admin')) {
    if (typeof initAdminPage === 'function') initAdminPage();
    return;
  }
  if (page.startsWith('customer')) {
    if (typeof initCustomerPage === 'function') initCustomerPage();
    return;
  }
  window.location.reload();
}

function renderBrand() {
  const state = getState();
  document.querySelectorAll('[data-brand]').forEach(el => {
    el.innerHTML = `
      <a class="brand-link" href="${routeTo('index.html')}">
        <img src="${routeTo('assets/logo.svg')}" alt="${escapeHtml(state.company.name)} logo">
        <div class="brand-copy">
          <strong>${escapeHtml(state.company.name)}</strong>
          <span>${escapeHtml(state.company.slogan)}</span>
        </div>
      </a>
    `;
  });
}

function renderFooter() {
  const state = getState();
  document.querySelectorAll('[data-footer]').forEach(el => {
    el.innerHTML = `
      <div class="container footer-box">
        <div>
          <strong>${escapeHtml(state.company.name)}</strong>
          <p class="muted">${escapeHtml(state.company.trustText)}</p>
        </div>
        <div>
          <div>${escapeHtml(state.company.supportEmail)}</div>
          <div>${escapeHtml(state.company.supportPhone)}</div>
          <div>${escapeHtml(state.company.address)}</div>
        </div>
      </div>
    `;
  });
}

function ensureAccess(page) {
  const currentUser = getCurrentUser();
  if (page.startsWith('customer')) {
    if (!currentUser || currentUser.role !== 'customer') {
      window.location.href = '../auth/index.html';
      return null;
    }
  }
  if (page.startsWith('admin')) {
    if (!currentUser || currentUser.role !== 'admin') {
      window.location.href = '../auth/index.html';
      return null;
    }
  }
  return currentUser;
}

function redirectForRole(user) {
  window.location.href = ['admin', 'support', 'accountant'].includes(user.role) ? routeTo('admin/index.html') : routeTo('customer/index.html');
}

function getModalRoot() {
  let root = document.querySelector('[data-global-modal]');
  if (!root) {
    root = document.createElement('div');
    root.className = 'modal-backdrop hidden';
    root.setAttribute('data-global-modal', '');
    document.body.appendChild(root);
  }
  return root;
}

function closeModal() {
  const root = getModalRoot();
  root.classList.add('hidden');
  root.innerHTML = '';
}

function openModal(html) {
  const root = getModalRoot();
  root.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true">
      <button class="modal-close" type="button" data-close-modal>✕</button>
      ${html}
    </div>
  `;
  root.classList.remove('hidden');
  root.addEventListener('click', event => {
    if (event.target === root || event.target.closest('[data-close-modal]')) closeModal();
  }, { once: true });
}

function populatePublicServices() {
  const state = getState();
  const root = document.querySelector('[data-public-services]');
  if (!root) return;
  root.innerHTML = activeServices(state).map(service => `
    <article class="service-card">
      <div class="service-meta">
        <span class="badge">${escapeHtml(service.category)}</span>
        ${service.featured ? '<span class="badge success">Nổi bật</span>' : ''}
      </div>
      <h3>${escapeHtml(service.name)}</h3>
      <p>${escapeHtml(service.description)}</p>
      <div class="service-tags">${service.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
      <div class="split-line service-actions">
        <div>
          <div class="price-hero">${formatCurrency(service.price)}</div>
          <span class="muted">/${escapeHtml(service.unit)}</span>
        </div>
        <a class="btn primary small" href="${routeTo('auth/index.html')}">Đăng nhập để mua</a>
      </div>
    </article>
  `).join('');
}

function bindAuthForms() {
  const currentUser = getCurrentUser();
  if (currentUser) {
    redirectForRole(currentUser);
    return;
  }

  const buttons = document.querySelectorAll('[data-auth-tab-btn]');
  const panes = document.querySelectorAll('[data-auth-tab]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.authTabBtn;
      buttons.forEach(button => button.classList.toggle('active', button === btn));
      panes.forEach(pane => pane.classList.toggle('hidden', pane.dataset.authTab !== key));
    });
  });

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async event => {
      event.preventDefault();
      const data = new FormData(loginForm);
      try {
        const payload = await apiRequest('POST', '/api/auth/login', {
          identifier: String(data.get('identifier') || '').trim(),
          password: String(data.get('password') || '')
        });
        setCurrentUser(payload.user.username);
        await bootstrapState(true);
        showToast('Đăng nhập thành công.', 'success');
        window.location.href = payload.user.role === 'admin' ? '../admin/index.html' : '../customer/index.html';
      } catch (error) {
        showToast(error.message || 'Sai thông tin đăng nhập.', 'error');
      }
    });
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', async event => {
      event.preventDefault();
      const data = new FormData(registerForm);
      const password = String(data.get('password') || '');
      const confirmPassword = String(data.get('confirmPassword') || '');
      if (password !== confirmPassword) {
        showToast('Mật khẩu nhập lại chưa khớp.', 'error');
        return;
      }
      try {
        const payload = await apiRequest('POST', '/api/auth/register', {
          fullName: String(data.get('fullName') || '').trim(),
          username: String(data.get('username') || '').trim(),
          email: String(data.get('email') || '').trim().toLowerCase(),
          phone: String(data.get('phone') || '').trim(),
          address: String(data.get('address') || '').trim(),
          password
        });
        setCurrentUser(payload.user.username);
        await bootstrapState(true);
        showToast('Đăng ký thành công.', 'success');
        window.location.href = '../customer/index.html';
      } catch (error) {
        showToast(error.message || 'Đăng ký thất bại.', 'error');
      }
    });
  }
}

function renderEntryPage() {
  populatePublicServices();
  bindAuthForms();
}

function renderAuth() {
  const currentUser = getCurrentUser();
  if (currentUser) {
    window.location.href = currentUser.role === 'admin' ? '../admin/index.html' : '../customer/index.html';
    return;
  }

  const buttons = document.querySelectorAll('[data-auth-tab-btn]');
  const panes = document.querySelectorAll('[data-auth-tab]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.authTabBtn;
      buttons.forEach(button => button.classList.toggle('active', button === btn));
      panes.forEach(pane => pane.classList.toggle('hidden', pane.dataset.authTab !== key));
    });
  });

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async event => {
      event.preventDefault();
      const submitBtn = loginForm.querySelector('button[type="submit"]');
      setButtonBusy(submitBtn, true, 'Đang đăng nhập...');

      try {
        const formData = new FormData(loginForm);
        const identifier = String(formData.get('identifier') || '').trim();
        const password = String(formData.get('password') || '');

        const result = await apiRequest('/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({ identifier, password })
        });

        await bootstrapState(true);

        if (result.user?.username) {
          setCurrentUser(result.user.username);
        }

        showToast('Đăng nhập thành công.', 'success');
        window.location.href = result.user?.role === 'admin' ? '../admin/index.html' : '../customer/index.html';
      } catch (error) {
        setButtonBusy(submitBtn, false);
        showToast(error.message || 'Sai thông tin đăng nhập.', 'error');
      }
    });
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', async event => {
      event.preventDefault();
      const submitBtn = registerForm.querySelector('button[type="submit"]');
      setButtonBusy(submitBtn, true, 'Đang tạo tài khoản...');

      try {
        const data = new FormData(registerForm);
        const password = String(data.get('password') || '');
        const confirmPassword = String(data.get('confirmPassword') || '');

        if (password !== confirmPassword) {
          throw new Error('Mật khẩu nhập lại chưa khớp.');
        }

        const payload = {
          username: String(data.get('username') || '').trim(),
          fullName: String(data.get('fullName') || '').trim(),
          email: String(data.get('email') || '').trim(),
          phone: String(data.get('phone') || '').trim(),
          address: String(data.get('address') || '').trim(),
          password
        };

        const result = await apiRequest('/api/auth/register', {
          method: 'POST',
          body: JSON.stringify(payload)
        });

        await bootstrapState(true);

        if (result.user?.username) {
          setCurrentUser(result.user.username);
        }

        showToast('Đăng ký thành công.', 'success');
        window.location.href = '../customer/index.html';
      } catch (error) {
        setButtonBusy(submitBtn, false);
        showToast(error.message || 'Đăng ký thất bại.', 'error');
      }
    });
  }
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach(el => {
    el.textContent = value;
  });
}

function renderCustomerShell(currentFile) {
  const user = ensureAccess(getPage());
  if (!user) return null;

  setText('[data-customer-name]', user.fullName);
  setText('[data-customer-username]', `@${user.username}`);
  setText('[data-customer-email]', user.email);
  setText('[data-customer-balance-pill]', formatCurrency(user.balance));
  setText('[data-customer-initials]', initials(user.fullName));
  setText('[data-customer-initials-large]', initials(user.fullName));

  document.querySelectorAll('[data-customer-avatar], [data-customer-avatar-top]').forEach(el => {
    if (user.avatar) {
      el.src = user.avatar;
      el.style.display = 'block';
    } else {
      el.removeAttribute('src');
      el.style.display = 'none';
    }
  });

  const navRoot = document.querySelector('[data-customer-nav]');
  if (navRoot) {
    navRoot.innerHTML = `
      <a class="side-link" href="${routeTo('index.html')}">← Trang chủ website</a>
      ${CUSTOMER_NAV.map(item => `<a class="side-link ${item.href === currentFile ? 'active' : ''}" href="${item.href}">${item.icon} ${item.label}</a>`).join('')}
    `;
  }

  const mobileRoot = document.querySelector('[data-mobile-nav]');
  if (mobileRoot) {
    const links = [...CUSTOMER_NAV, { href: routeTo('index.html'), label: 'Trang chủ', icon: '🌐' }];
    mobileRoot.innerHTML = links.map(item => `<a class="${item.href === currentFile ? 'active' : ''}" href="${item.href}"><span class="icon">${item.icon}</span><span>${item.label}</span></a>`).join('');
  }

  document.querySelectorAll('[data-logout-btn]').forEach(btn => btn.addEventListener('click', logout));
  document.querySelectorAll('[data-open-profile]').forEach(btn => btn.addEventListener('click', () => window.location.href = 'profile.html'));
  document.querySelectorAll('[data-open-support]').forEach(btn => btn.addEventListener('click', () => window.location.href = 'support.html'));
  document.querySelectorAll('[data-open-orders]').forEach(btn => btn.addEventListener('click', () => window.location.href = 'history.html'));
  document.querySelectorAll('[data-scroll-deposit]').forEach(btn => btn.addEventListener('click', () => window.location.href = 'wallet.html'));

  return user;
}

function renderCustomerOverview() {
  const user = renderCustomerShell('index.html');
  if (!user) return;
  const state = getState();
  const orders = state.orders.filter(order => order.customerId === user.id);
  const deposits = state.deposits.filter(deposit => deposit.customerId === user.id);
  const chats = state.chats.find(chat => chat.customerId === user.id)?.messages || [];

  const kpiRoot = document.querySelector('[data-customer-kpis]');
  if (kpiRoot) {
    kpiRoot.innerHTML = `
      <div class="kpi-card"><span class="mini-label">Số dư</span><strong>${formatCurrency(user.balance)}</strong></div>
      <div class="kpi-card"><span class="mini-label">Đơn hàng</span><strong>${orders.length}</strong></div>
      <div class="kpi-card"><span class="mini-label">Lệnh nạp</span><strong>${deposits.length}</strong></div>
      <div class="kpi-card"><span class="mini-label">Tin nhắn</span><strong>${chats.length}</strong></div>
    `;
  }

  const quickLinks = document.querySelector('[data-customer-quick-links]');
  if (quickLinks) {
    quickLinks.innerHTML = `
      <a class="quick-link-card" href="services.html"><span class="mini-label">Dịch vụ</span><h3>Mua dịch vụ theo từng bước</h3><p class="muted">Xem chi tiết, chỉnh số lượng rồi mới xác nhận mua.</p></a>
      <a class="quick-link-card" href="wallet.html"><span class="mini-label">Ví coin</span><h3>Nạp tiền bằng QR</h3><p class="muted">Thấy đúng thông tin admin, số tiền và trạng thái duyệt.</p></a>
      <a class="quick-link-card" href="support.html"><span class="mini-label">Live chat</span><h3>Trao đổi với admin</h3><p class="muted">Nhắn trực tiếp với admin trong trang riêng, gọn và dễ theo dõi.</p></a>
    `;
  }

  const recentRoot = document.querySelector('[data-customer-recent]');
  if (recentRoot) {
    const recentOrders = orders.slice().sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt))).slice(0, 3);
    recentRoot.innerHTML = recentOrders.length ? recentOrders.map(order => `
      <div class="list-card">
        <div class="customer-card-head">
          <strong>${escapeHtml(order.serviceName)}</strong>
          ${statusBadge(order.status)}
        </div>
        <div class="detail-row"><span class="muted">${escapeHtml(order.id)}</span><strong>${formatCurrency(order.totalCoin)}</strong></div>
        <div class="muted">${escapeHtml(order.createdAt)}</div>
      </div>
    `).join('') : '<div class="empty-state">Chưa có đơn hàng nào.</div>';
  }
}

function openPurchaseModal(service, user) {
  let quantity = 1;
  openModal(`
    <div class="modal-body">
      <span class="mini-label">Xác nhận đơn hàng</span>
      <h2>${escapeHtml(service.name)}</h2>
      <p class="muted">Kiểm tra chi tiết đơn hàng, số lượng và tạm tính trước khi xác nhận mua ngay.</p>
      <div class="purchase-grid">
        <div class="sub-card">
          <div class="service-tags">${service.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
          <p>${escapeHtml(service.description)}</p>
          <div class="info-pairs">
            <div><span>Giá mỗi ${escapeHtml(service.unit)}</span><strong>${formatCurrency(service.price)}</strong></div>
            <div><span>Số dư hiện tại</span><strong>${formatCurrency(user.balance)}</strong></div>
          </div>
        </div>
        <form id="purchase-form" class="form-grid sub-card">
          <label>
            <span class="mini-label">Số lượng</span>
            <div class="qty-box">
              <button class="qty-btn" type="button" data-qty-minus>-</button>
              <input class="input qty-input" id="purchase-qty" type="number" min="1" value="1">
              <button class="qty-btn" type="button" data-qty-plus>+</button>
            </div>
          </label>
          <textarea class="textarea" id="purchase-note" placeholder="Ghi chú cho đơn hàng, ví dụ yêu cầu chi tiết hoặc mục tiêu triển khai"></textarea>
          <div class="summary-grid compact-summary" id="purchase-summary"></div>
          <div class="card-actions">
            <button class="btn ghost" type="button" data-close-modal>Quay lại xem dịch vụ</button>
            <button class="btn primary" type="submit">Xác nhận mua ngay</button>
          </div>
        </form>
      </div>
    </div>
  `);

  const qtyInput = document.getElementById('purchase-qty');
  const summary = document.getElementById('purchase-summary');
  const purchaseForm = document.getElementById('purchase-form');

  const drawSummary = () => {
    quantity = Math.max(1, Number(qtyInput.value || 1));
    qtyInput.value = quantity;
    const total = service.price * quantity;
    const remaining = user.balance - total;
    summary.innerHTML = `
      <div class="summary-item"><span class="mini-label">Số lượng</span><strong>${quantity}</strong></div>
      <div class="summary-item"><span class="mini-label">Tạm tính</span><strong>${formatCurrency(total)}</strong></div>
      <div class="summary-item"><span class="mini-label">Số dư sau mua</span><strong>${formatCurrency(Math.max(remaining, 0))}</strong></div>
    `;
  };

  document.querySelector('[data-qty-minus]')?.addEventListener('click', () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value || 1) - 1);
    drawSummary();
  });
  document.querySelector('[data-qty-plus]')?.addEventListener('click', () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value || 1) + 1);
    drawSummary();
  });
  qtyInput?.addEventListener('input', drawSummary);
  drawSummary();

  purchaseForm?.addEventListener('submit', event => {
    event.preventDefault();
    const freshState = getState();
    const customer = freshState.users.find(item => item.id === user.id);
    const total = service.price * quantity;
    if (customer.balance < total) {
      showToast('Số dư chưa đủ. Vui lòng nạp thêm coin trước khi mua.', 'error');
      return;
    }
    customer.balance -= total;
    const newOrder = {
      id: makeOrderCode(),
      customerId: customer.id,
      serviceId: service.id,
      serviceName: service.name,
      quantity,
      totalCoin: total,
      status: 'pending',
      note: String(document.getElementById('purchase-note')?.value || '').trim(),
      adminNote: '',
      resultNote: '',
      referenceCode: '',
      refundAmount: 0,
      createdAt: new Date().toLocaleString('vi-VN'),
      updatedAt: new Date().toLocaleString('vi-VN'),
      timeline: []
    };

    pushOrderTimeline(newOrder, 'Tạo đơn', 'customer', newOrder.note || 'Khách hàng vừa tạo đơn');
    freshState.orders.unshift(newOrder);
    saveState(freshState);
    closeModal();
    showToast('Đã tạo đơn hàng mới.', 'success');
    refreshCurrentView();
  });
}

function renderServicesPage() {
  const user = renderCustomerShell('services');
  if (!user) return;
  const state = getState();
  const services = activeServices(state);
  const categories = ['Tất cả', ...new Set(services.map(service => service.category))];
  const tabs = document.querySelector('[data-service-tabs]');
  const grid = document.querySelector('[data-service-list]');
  const summary = document.querySelector('[data-service-page-summary]');

  if (summary) {
    summary.innerHTML = `
      <div class="summary-item"><span class="mini-label">Dịch vụ mở bán</span><strong>${services.length}</strong></div>
      <div class="summary-item"><span class="mini-label">Danh mục</span><strong>${categories.length - 1}</strong></div>
      <div class="summary-item"><span class="mini-label">Số dư hiện tại</span><strong>${formatCurrency(user.balance)}</strong></div>
    `;
  }

  let currentCategory = 'Tất cả';

  function openOrderModal(serviceId) {
    const freshState = getState();
    const customer = freshState.users.find(item => item.id === user.id);
    const service = serviceById(freshState, serviceId);
    if (!service || !customer) return;

    const html = `
      <div class="modal-body">
        <span class="mini-label">Xác nhận mua dịch vụ</span>
        <h2>${escapeHtml(service.name)}</h2>
        <p class="muted">${escapeHtml(service.description || '')}</p>

        <div class="summary-grid">
          <div class="summary-item"><span class="mini-label">Đơn giá</span><strong>${formatCurrency(service.price)}</strong></div>
          <div class="summary-item"><span class="mini-label">Đơn vị</span><strong>${escapeHtml(service.unit)}</strong></div>
          <div class="summary-item"><span class="mini-label">Số dư</span><strong>${formatCurrency(customer.balance)}</strong></div>
        </div>

        <form id="customer-order-detail-form" class="form-grid">
          <label>
            <span class="mini-label">Số lượng</span>
            <input class="input" type="number" name="quantity" min="1" step="1" value="1">
          </label>

          <label>
            <span class="mini-label">Yêu cầu dịch vụ</span>
            <input class="input" type="text" name="requestDetail" placeholder="Ví dụ: gói cần xử lý, nền tảng, khu vực, yêu cầu cụ thể...">
          </label>

          <label>
            <span class="mini-label">Mục cần admin xử lý</span>
            <input class="input" type="text" name="targetLabel" placeholder="Ví dụ: Facebook, Gmail, nền tảng cần xử lý...">
          </label>

          <label>
            <span class="mini-label">Ghi chú thêm</span>
            <textarea class="textarea" name="customerNote" rows="4" placeholder="Ghi rõ yêu cầu để admin xử lý nhanh hơn."></textarea>
          </label>

          <div class="sub-card">
            <span class="mini-label">Xem trước đơn hàng</span>
            <div id="order-preview-box">
              <div class="detail-row"><span>Tổng coin</span><strong>${formatCurrency(service.price)}</strong></div>
              <div class="detail-row"><span>Trạng thái tạo đơn</span><strong>Chờ xử lý</strong></div>
            </div>
          </div>

          <div class="page-tools">
            <button class="btn ghost" type="button" data-close-modal>✕ Không mua nữa</button>
            <button class="btn primary" type="submit" id="confirm-order-btn">Xác nhận mua ngay</button>
          </div>
        </form>
      </div>
    `;

    openModal(html);

    const form = document.getElementById('customer-order-detail-form');
    const preview = document.getElementById('order-preview-box');
    const submitBtn = document.getElementById('confirm-order-btn');

    const updatePreview = () => {
      const qty = Math.max(1, Number(form.quantity.value || 1));
      const totalCoin = Number(service.price || 0) * qty;
      preview.innerHTML = `
        <div class="detail-row"><span>Số lượng</span><strong>${qty}</strong></div>
        <div class="detail-row"><span>Tổng coin</span><strong>${formatCurrency(totalCoin)}</strong></div>
        <div class="detail-row"><span>Số dư sau mua</span><strong>${formatCurrency(customer.balance - totalCoin)}</strong></div>
      `;
    };

    form.quantity.addEventListener('input', updatePreview);
    updatePreview();

    form.addEventListener('submit', event => {
      event.preventDefault();
      setButtonBusy(submitBtn, true, 'Đang tạo đơn...');

      const fresh = getState();
      const latestCustomer = fresh.users.find(item => item.id === user.id);
      const latestService = serviceById(fresh, serviceId);
      if (!latestCustomer || !latestService) {
        setButtonBusy(submitBtn, false);
        return;
      }

      const quantity = Math.max(1, Number(form.quantity.value || 1));
      const totalCoin = Number(latestService.price || 0) * quantity;

      if (latestCustomer.balance < totalCoin) {
        setButtonBusy(submitBtn, false);
        showToast('Số dư chưa đủ, vui lòng nạp thêm coin.', 'error');
        return;
      }

      latestCustomer.balance -= totalCoin;

      const order = {
        id: makeOrderCode(),
        customerId: latestCustomer.id,
        serviceId: latestService.id,
        serviceName: latestService.name,
        quantity,
        totalCoin,
        status: 'pending',
        requestDetail: String(form.requestDetail.value || '').trim(),
        targetLabel: String(form.targetLabel.value || '').trim(),
        note: String(form.customerNote.value || '').trim(),
        adminNote: '',
        resultNote: '',
        referenceCode: '',
        refundAmount: 0,
        refundApplied: false,
        createdAt: new Date().toLocaleString('vi-VN'),
        updatedAt: new Date().toLocaleString('vi-VN'),
        timeline: []
      };

      pushOrderTimeline(order, 'Tạo đơn', 'customer', order.note || order.requestDetail || 'Khách hàng vừa tạo đơn');
      fresh.orders.unshift(order);

      saveState(fresh);
      closeModal();
      showToast('Đã tạo đơn hàng mới.', 'success');
      refreshCurrentView();
    });
  }

  function drawServices() {
    const filtered = currentCategory === 'Tất cả' ? services : services.filter(service => service.category === currentCategory);
    tabs.innerHTML = categories.map(category => `<button class="tab-chip ${category === currentCategory ? 'active' : ''}" type="button" data-category="${category}">${category}</button>`).join('');
    grid.innerHTML = filtered.map(service => `
      <article class="service-card">
        <div class="service-meta">
          <span class="badge">${escapeHtml(service.category)}</span>
          ${service.featured ? '<span class="badge success">Nổi bật</span>' : ''}
        </div>
        <h3>${escapeHtml(service.name)}</h3>
        <p>${escapeHtml(service.description)}</p>
        <div class="feature-list">
          <article><strong>Đặt dịch vụ rõ ràng</strong><div class="muted">Khách tạo đơn, admin nhận xử lý và cập nhật trạng thái trực tiếp.</div></article>
          <article><strong>Theo dõi dễ hơn</strong><div class="muted">Lịch sử đơn hàng sẽ hiển thị ghi chú, kết quả xử lý và hoàn coin nếu có.</div></article>
        </div>
        <div class="service-tags">${service.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
        <div class="split-line service-actions">
          <div>
            <div class="price-hero">${formatCurrency(service.price)}</div>
            <span class="muted">/${escapeHtml(service.unit)}</span>
          </div>
          <div class="table-actions">
            <button class="btn ghost small" type="button" data-service-detail="${service.id}">Xem chi tiết</button>
            <button class="btn primary small" type="button" data-buy-service="${service.id}">Mua ngay</button>
          </div>
        </div>
      </article>
    `).join('');

    tabs.querySelectorAll('[data-category]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.dataset.category;
        drawServices();
      });
    });

    grid.querySelectorAll('[data-buy-service], [data-service-detail]').forEach(btn => {
      btn.addEventListener('click', () => openOrderModal(btn.dataset.buyService || btn.dataset.serviceDetail));
    });
  }

  if (tabs && grid) drawServices();
}

function renderWalletPage() {
  const user = renderCustomerShell('wallet.html');
  if (!user) return;
  const state = getState();
  const paymentRoot = document.querySelector('[data-payment-root]');
  const balanceRoot = document.querySelector('[data-wallet-balance]');
  const depositTable = document.querySelector('[data-wallet-deposits]');
  const notificationsRoot = document.querySelector('[data-wallet-notifications]');
  const previewRoot = document.getElementById('payment-preview');

  if (balanceRoot) {
    balanceRoot.innerHTML = `
      <div class="summary-grid">
        <div class="summary-item"><span class="mini-label">Số dư hiện tại</span><strong>${formatCurrency(user.balance)}</strong></div>
        <div class="summary-item"><span class="mini-label">Khuyến nghị nạp</span><strong>Từ ${formatMoney(state.payment.minDeposit)}</strong></div>
        <div class="summary-item"><span class="mini-label">Cách xử lý</span><strong>Chuyển khoản → Gửi yêu cầu → Chờ duyệt</strong></div>
      </div>
    `;
  }

  if (paymentRoot) {
    paymentRoot.innerHTML = `
      <span class="mini-label">Thông tin nhận tiền của admin</span>
      <h3>Quét QR hoặc chuyển khoản thủ công</h3>
      <div class="payment-card">
        <div class="qr-box ${state.payment.qrImage ? '' : 'qr-placeholder'}">
          ${state.payment.qrImage ? `<img src="${state.payment.qrImage}" alt="QR thanh toán">` : '<div class="qr-empty"><strong>QR admin</strong><span>Admin chưa tải ảnh QR, bạn vẫn có thể chuyển khoản bằng thông tin bên dưới.</span></div>'}
        </div>
        <div class="info-pairs">
          <div><span>Ngân hàng</span><strong>${escapeHtml(state.payment.bankName)}</strong></div>
          <div><span>Chủ tài khoản</span><strong>${escapeHtml(state.payment.accountName)}</strong></div>
          <div><span>Số tài khoản</span><strong>${escapeHtml(state.payment.accountNumber)}</strong></div>
          <div><span>Email hỗ trợ</span><strong>${escapeHtml(state.company.supportEmail || 'Chưa cập nhật')}</strong></div>
          <div><span>Telegram hỗ trợ</span><strong><a href="${state.company.supportTelegram}" target="_blank">@Mmo_white</a></strong></div>
          <div><span>Số điện thoại</span><strong>${escapeHtml(state.company.supportPhone || 'Chưa cập nhật')}</strong></div>
          <div><span>Địa chỉ</span><strong>${escapeHtml(state.company.address || 'Chưa cập nhật')}</strong></div>
        </div>
        <div class="notice">${escapeHtml(state.payment.note)}</div>
      </div>
    `;
  }

  const form = document.getElementById('deposit-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const amount = Math.max(0, Number(data.get('amount') || 0));
      const note = String(data.get('note') || '').trim();
      if (!amount) {
        showToast('Vui lòng nhập số tiền muốn nạp.', 'error');
        return;
      }
      const transferContent = note || `NAP ${user.username.toUpperCase()} ${amount}`;
      previewRoot.innerHTML = `
        <div class="sub-card">
          <span class="mini-label">Xem trước thanh toán</span>
          <div class="info-pairs">
            <div><span>Số tiền nạp</span><strong>${formatMoney(amount)}</strong></div>
            <div><span>Coin dự kiến</span><strong>${formatCurrency(amount)}</strong></div>
            <div><span>Nội dung chuyển khoản</span><strong>${escapeHtml(transferContent)}</strong></div>
            <div><span>Tài khoản nhận</span><strong>${escapeHtml(state.payment.accountNumber)} • ${escapeHtml(state.payment.bankName)}</strong></div>
          </div>
          ${amount < state.payment.minDeposit ? `<div class="notice">Số tiền này thấp hơn mức khuyến nghị ${formatMoney(state.payment.minDeposit)} nhưng bạn vẫn có thể gửi yêu cầu duyệt.</div>` : ''}
          <button class="btn secondary full" type="button" id="confirm-payment-btn">Tôi đã chuyển khoản, gửi yêu cầu duyệt</button>
        </div>
      `;
      document.getElementById('confirm-payment-btn')?.addEventListener('click', () => {
        const freshState = getState();
        freshState.deposits.unshift({
          id: `DP-${Date.now()}`,
          customerId: user.id,
          amount,
          coin: amount,
          status: 'pending',
          note: transferContent,
          createdAt: nowString()
        });
        saveState(freshState);
        showToast('Đã tạo yêu cầu nạp tiền, chờ admin duyệt.', 'success');
        refreshCurrentView();
      }, { once: true });
    });
  }

  const deposits = state.deposits.filter(item => item.customerId === user.id).sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  if (depositTable) {
    depositTable.innerHTML = deposits.length ? deposits.map(item => `
      <tr>
        <td>${escapeHtml(item.id)}</td>
        <td>${formatMoney(item.amount)}</td>
        <td>${formatCurrency(item.coin)}</td>
        <td>${statusBadge(item.status)}</td>
        <td>${escapeHtml(item.note)}</td>
        <td>${escapeHtml(item.createdAt)}</td>
      </tr>
    `).join('') : '<tr><td colspan="6"><div class="empty-state">Chưa có yêu cầu nạp nào.</div></td></tr>';
  }

  if (notificationsRoot) {
    notificationsRoot.innerHTML = deposits.length ? deposits.map(item => {
      const text = item.status === 'approved'
        ? `Lệnh ${item.id} đã được duyệt. ${formatCurrency(item.coin)} đã được cộng vào số dư.`
        : item.status === 'rejected'
          ? `Lệnh ${item.id} đã bị từ chối. Vui lòng kiểm tra lại thông tin thanh toán.`
          : `Lệnh ${item.id} đang chờ admin duyệt. Bạn có thể theo dõi trạng thái tại đây.`;
      return `
        <div class="message-card">
          <div class="customer-card-head"><h3>${escapeHtml(item.id)}</h3>${statusBadge(item.status)}</div>
          <p class="muted">${text}</p>
          <div class="detail-row"><span>${formatMoney(item.amount)}</span><strong>${escapeHtml(item.createdAt)}</strong></div>
        </div>
      `;
    }).join('') : '<div class="empty-state">Thông báo thanh toán sẽ hiển thị tại đây.</div>';
  }
}

function renderHistoryPage() {
  const user = renderCustomerShell('history');
  if (!user) return;
  const state = getState();
  const orders = state.orders.filter(item => item.customerId === user.id);
  const deposits = state.deposits.filter(item => item.customerId === user.id);

  const ordersRoot = document.querySelector('[data-history-orders]');
  const depositsRoot = document.querySelector('[data-history-deposits]');
  const purchasesRoot = document.querySelector('[data-history-purchases]');

  if (ordersRoot) {
    ordersRoot.innerHTML = orders.length ? orders.map(item => `
      <tr>
        <td>
          <div><strong>${escapeHtml(item.id)}</strong></div>
          <div class="table-actions" style="margin-top:8px;">
            <button class="btn ghost small" type="button" data-copy-order="${escapeHtml(item.id)}">Sao chép mã</button>
          </div>
        </td>
        <td>
          <div><strong>${escapeHtml(item.serviceName)}</strong></div>
          <div class="cell-muted">Yêu cầu: ${escapeHtml(item.requestDetail || '--')}</div>
          <div class="cell-muted">Mục xử lý: ${escapeHtml(item.targetLabel || '--')}</div>
          <div class="cell-muted">Ghi chú khách: ${escapeHtml(item.note || '--')}</div>
        </td>
        <td>${item.quantity}</td>
        <td>${formatCurrency(item.totalCoin)}</td>
        <td>
          ${statusBadge(item.status)}
          <div class="cell-muted" style="margin-top:6px;">Tham chiếu: ${escapeHtml(item.referenceCode || '--')}</div>
          <div class="cell-muted">Hoàn coin: ${formatCurrency(item.refundAmount || 0)}</div>
        </td>
        <td>
          <div>${escapeHtml(item.createdAt)}</div>
          <div class="cell-muted">Cập nhật: ${escapeHtml(item.updatedAt || item.createdAt)}</div>
        </td>
      </tr>
    `).join('') : '<tr><td colspan="6" class="muted">Chưa có đơn hàng.</td></tr>';

    ordersRoot.querySelectorAll('[data-copy-order]').forEach(btn => {
      btn.addEventListener('click', () => copyText(btn.dataset.copyOrder));
    });
  }

  if (depositsRoot) {
    depositsRoot.innerHTML = deposits.length ? deposits.map(item => `
      <tr>
        <td>${escapeHtml(item.id)}</td>
        <td>${formatMoney(item.amount)}</td>
        <td>${formatCurrency(item.coin)}</td>
        <td>${statusBadge(item.status)}</td>
        <td>${escapeHtml(item.note || '')}</td>
        <td>${escapeHtml(item.createdAt)}</td>
      </tr>
    `).join('') : '<tr><td colspan="6" class="muted">Chưa có lệnh nạp.</td></tr>';
  }

  if (purchasesRoot) {
    purchasesRoot.innerHTML = orders.length ? orders.map(item => {
      const latestStep = item.timeline?.[0];
      return `
        <tr>
          <td>${escapeHtml(item.id)}</td>
          <td>
            <div><strong>Kết quả xử lý:</strong> ${escapeHtml(item.resultNote || 'Đang chờ admin xử lý')}</div>
            <div class="cell-muted">Ghi chú admin: ${escapeHtml(item.adminNote || '--')}</div>
            <div class="cell-muted">Tiến trình mới nhất: ${escapeHtml(latestStep?.action || '--')}</div>
          </td>
          <td>${formatCurrency(item.totalCoin)}</td>
          <td>${statusBadge(item.status)}</td>
          <td>${escapeHtml(latestStep?.createdAt || item.updatedAt || item.createdAt)}</td>
        </tr>
      `;
    }).join('') : '<tr><td colspan="5" class="muted">Chưa có lịch sử mua.</td></tr>';
  }
}

function renderProfilePage() {
  const user = renderCustomerShell('profile.html');
  if (!user) return;
  const profileRoot = document.querySelector('[data-customer-profile]');
  const form = document.getElementById('profile-form');

  const drawPreview = currentUser => {
    if (!profileRoot) return;
    profileRoot.innerHTML = `
      <div class="avatar avatar-lg profile-avatar-xl">${currentUser.avatar ? `<img src="${currentUser.avatar}" alt="avatar">` : `<span>${initials(currentUser.fullName)}</span>`}</div>
      <span class="mini-label">Hồ sơ hiện tại</span>
      <h3>${escapeHtml(currentUser.fullName)}</h3>
      <div class="profile-rows">
        <div><span>Username</span><strong>@${escapeHtml(currentUser.username)}</strong></div>
        <div><span>Email</span><strong>${escapeHtml(currentUser.email || 'Chưa cập nhật')}</strong></div>
        <div><span>Điện thoại</span><strong>${escapeHtml(currentUser.phone || 'Chưa cập nhật')}</strong></div>
        <div><span>Địa chỉ</span><strong>${escapeHtml(currentUser.address || 'Chưa cập nhật')}</strong></div>
        <div><span>Số dư</span><strong>${formatCurrency(currentUser.balance)}</strong></div>
      </div>
      <p class="muted">${escapeHtml(currentUser.bio || 'Chưa có mô tả hồ sơ.')}</p>
    `;
  };

  drawPreview(user);
  if (form) {
    form.fullName.value = user.fullName || '';
    form.email.value = user.email || '';
    form.phone.value = user.phone || '';
    form.address.value = user.address || '';
    form.bio.value = user.bio || '';
    let nextAvatar = user.avatar || '';

    const uploadInput = document.querySelector('[data-profile-avatar-upload]');
    uploadInput?.addEventListener('change', event => {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        nextAvatar = String(reader.result || '');
        const previewUser = { ...user, avatar: nextAvatar };
        drawPreview(previewUser);
      };
      reader.readAsDataURL(file);
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      const state = getState();
      const customer = state.users.find(item => item.id === user.id);
      customer.fullName = form.fullName.value.trim();
      customer.email = form.email.value.trim();
      customer.phone = form.phone.value.trim();
      customer.address = form.address.value.trim();
      customer.bio = form.bio.value.trim();
      customer.avatar = nextAvatar;
      saveState(state);
      showToast('Đã lưu hồ sơ khách hàng.', 'success');
      refreshCurrentView();
    });
  }
}

function renderSupportPage() {
  const user = renderCustomerShell('support.html');
  if (!user) return;
  const state = getState();
  let thread = state.chats.find(item => item.customerId === user.id);
  if (!thread) {
    thread = { customerId: user.id, messages: [] };
    state.chats.push(thread);
    saveState(state);
  }

  const messagesRoot = document.querySelector('[data-customer-chat-messages]');
  const infoRoot = document.querySelector('[data-support-info]');
  const form = document.getElementById('customer-chat-form');

  const drawMessages = () => {
    const freshThread = getState().chats.find(item => item.customerId === user.id) || { messages: [] };
    if (messagesRoot) {
      messagesRoot.innerHTML = freshThread.messages.length ? freshThread.messages.map(item => `
        <div class="chat-message ${item.sender === 'customer' ? 'customer' : 'admin'}">
          <div>${escapeHtml(item.text)}</div>
          <span class="chat-meta">${item.sender === 'customer' ? 'Bạn' : 'Admin'} • ${escapeHtml(item.time)}</span>
        </div>
      `).join('') : '<div class="empty-state">Chưa có hội thoại nào.</div>';
      messagesRoot.scrollTop = messagesRoot.scrollHeight;
    }
    if (infoRoot) {
      infoRoot.innerHTML = `
        <div class="message-card">
          <span class="mini-label">Trạng thái hỗ trợ</span>
          <h3>CSKH đang hoạt động</h3>
          <p class="muted">Khi cần, bạn có thể nhắn trực tiếp tại đây thay vì phải lẫn với các mục dịch vụ hoặc hồ sơ.</p>
        </div>
        <div class="message-card">
          <span class="mini-label">Mẹo sử dụng</span>
          <p class="muted">Hãy ghi rõ mã đơn hàng, dịch vụ hoặc mã nạp tiền để admin hỗ trợ nhanh hơn.</p>
        </div>
      `;
    }
  };

  drawMessages();
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const textarea = form.querySelector('textarea');
    const text = String(textarea.value || '').trim();
    if (!text) return;
    const freshState = getState();
    let freshThread = freshState.chats.find(item => item.customerId === user.id);
    if (!freshThread) {
      freshThread = { customerId: user.id, messages: [] };
      freshState.chats.push(freshThread);
    }
    freshThread.messages.push({ sender: 'customer', text, time: nowString() });
    saveState(freshState);
    textarea.value = '';
    drawMessages();
    showToast('Đã gửi tin nhắn cho admin.', 'success');
  });
}

function customerStats(state, customer) {
  const orders = state.orders.filter(order => order.customerId === customer.id).sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  const deposits = state.deposits.filter(deposit => deposit.customerId === customer.id).sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  const pendingDeposits = deposits.filter(item => item.status === 'pending');
  const thread = state.chats.find(item => item.customerId === customer.id) || { messages: [] };
  const lastMessage = thread.messages[thread.messages.length - 1] || null;
  const latestTouch = [orders[0]?.createdAt, deposits[0]?.createdAt, lastMessage?.time].filter(Boolean).sort().slice(-1)[0] || 'Chưa có hoạt động';
  return { orders, deposits, pendingDeposits, thread, lastMessage, latestTouch };
}

function openCustomerDetailModal(customerId) {
  const state = getState();
  const customer = state.users.find(item => item.id === customerId);
  if (!customer) return;
  const stats = customerStats(state, customer);
  openModal(`
    <div class="modal-body">
      <span class="mini-label">Chi tiết khách hàng</span>
      <div class="customer-card-head"><h2>${escapeHtml(customer.fullName)}</h2>${priorityBadge(stats.pendingDeposits.length ? 'urgent' : stats.thread.messages.length ? 'medium' : 'low')}</div>
      <div class="detail-row"><span>@${escapeHtml(customer.username)}</span><strong>${formatCurrency(customer.balance)}</strong></div>
      <div class="summary-grid compact-summary">
        <div class="summary-item"><span class="mini-label">Đơn hàng</span><strong>${stats.orders.length}</strong></div>
        <div class="summary-item"><span class="mini-label">Lệnh nạp</span><strong>${stats.deposits.length}</strong></div>
        <div class="summary-item"><span class="mini-label">Tin nhắn</span><strong>${stats.thread.messages.length}</strong></div>
      </div>
      <div class="purchase-grid">
        <div class="sub-card">
          <span class="mini-label">Thông tin hồ sơ</span>
          <div class="info-pairs">
            <div><span>Email</span><strong>${escapeHtml(customer.email || 'Chưa cập nhật')}</strong></div>
            <div><span>Điện thoại</span><strong>${escapeHtml(customer.phone || 'Chưa cập nhật')}</strong></div>
            <div><span>Địa chỉ</span><strong>${escapeHtml(customer.address || 'Chưa cập nhật')}</strong></div>
            <div><span>Hoạt động gần nhất</span><strong>${escapeHtml(stats.latestTouch)}</strong></div>
          </div>
        </div>
        <div class="sub-card">
          <span class="mini-label">Thu chi gần đây</span>
          <div class="list-stack">
            ${stats.deposits.slice(0, 3).map(item => `<div class="message-card"><div class="detail-row"><span>${escapeHtml(item.id)}</span><strong>${formatMoney(item.amount)}</strong></div><div>${statusBadge(item.status)}</div></div>`).join('') || '<div class="empty-state">Chưa có lệnh nạp.</div>'}
            ${stats.orders.slice(0, 3).map(item => `<div class="message-card"><div class="detail-row"><span>${escapeHtml(item.id)}</span><strong>${formatCurrency(item.totalCoin)}</strong></div><div class="muted">${escapeHtml(item.serviceName)}</div></div>`).join('') || '<div class="empty-state">Chưa có đơn hàng.</div>'}
          </div>
        </div>
      </div>
      <div class="sub-card">
        <span class="mini-label">Live chat gần nhất</span>
        <div class="list-stack">
          ${stats.thread.messages.slice(-4).map(msg => `<div class="chat-message ${msg.sender === 'customer' ? 'customer' : 'admin'}"><div>${escapeHtml(msg.text)}</div><span class="chat-meta">${msg.sender === 'customer' ? 'Khách hàng' : 'Admin'} • ${escapeHtml(msg.time)}</span></div>`).join('') || '<div class="empty-state">Chưa có tin nhắn.</div>'}
        </div>
      </div>
    </div>
  `);
}

function renderAdminServices(state) {
  const servicesRoot = document.querySelector('[data-admin-services]');
  const form = document.getElementById('admin-service-form');
  const previewRoot = document.querySelector('[data-admin-service-preview]');
  const nameField = form?.querySelector('[name="name"]');
  const categoryField = form?.querySelector('[name="category"]');
  const priceField = form?.querySelector('[name="price"]');
  const unitField = form?.querySelector('[name="unit"]');
  const tagsField = form?.querySelector('[name="tags"]');
  const featuredField = form?.querySelector('[name="featured"]');
  const descriptionField = form?.querySelector('[name="description"]');
  let nextImage = form?.dataset.image || '';

  const drawPreview = service => {
    if (!previewRoot) return;
    previewRoot.innerHTML = `
      <span class="mini-label">Xem trước</span>
      <h3>${escapeHtml(service.name || 'Dịch vụ mới')}</h3>
      <div class="service-preview-card">
        <div class="service-thumb ${service.image ? '' : 'empty'}">${service.image ? `<img src="${service.image}" alt="service">` : '<span>Chưa có ảnh</span>'}</div>
        <div class="service-preview-copy">
          <div class="service-tags">${(service.tags || []).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
          <p>${escapeHtml(service.description || 'Điền mô tả chi tiết để khách hàng hiểu rõ trước khi mua.')}</p>
          <div class="detail-row"><span>${escapeHtml(service.category || 'Danh mục')}</span><strong>${formatCurrency(service.price || 0)} / ${escapeHtml(service.unit || 'gói')}</strong></div>
        </div>
      </div>
    `;
  };

  if (servicesRoot) {
    servicesRoot.innerHTML = state.services.map(service => `
      <tr>
        <td>
          <div class="service-admin-row">
            <div class="service-thumb sm ${service.image ? '' : 'empty'}">${service.image ? `<img src="${service.image}" alt="service">` : '<span>IMG</span>'}</div>
            <div><strong>${escapeHtml(service.name)}</strong><div class="cell-muted">${escapeHtml(service.description)}</div></div>
          </div>
        </td>
        <td>${escapeHtml(service.category)}</td>
        <td>${formatCurrency(service.price)}</td>
        <td>${escapeHtml(service.unit)}</td>
        <td>${statusBadge(service.status)}</td>
        <td>${service.featured ? '<span class="badge success">Yes</span>' : '<span class="muted">No</span>'}</td>
        <td>
          <div class="table-actions">
            <button class="btn secondary small" type="button" data-edit-service="${service.id}">Sửa</button>
            <button class="btn ghost small" type="button" data-delete-service="${service.id}">Xóa</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  const imageInput = form?.querySelector('[data-service-image-upload]');
  const idField = form?.querySelector('input[name="id"]');
  const resetEditor = () => {
    if (!form) return;
    form.reset();
    if (idField) idField.value = '';
    nextImage = '';
    form.dataset.image = '';
    const submitBtn = form.querySelector('[data-service-submit]');
    if (submitBtn) submitBtn.textContent = 'Lưu dịch vụ mới';
    drawPreview({ name: '', image: '', description: '', tags: [], price: 0, category: '', unit: '' });
  };

  if (form) {
    if (form.name) form.name.value = form.name.value || '';
    drawPreview({
      name: nameField?.value || '',
      image: nextImage,
      description: descriptionField?.value || '',
      tags: String(tagsField?.value || '').split(',').map(item => item.trim()).filter(Boolean),
      price: Number(priceField?.value || 0),
      category: categoryField?.value || '',
      unit: unitField?.value || ''
    });
  }

  if (imageInput && !imageInput.dataset.bound) {
    imageInput.dataset.bound = 'true';
    imageInput.addEventListener('change', event => {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        nextImage = String(reader.result || '');
        form.dataset.image = nextImage;
        drawPreview({
          name: nameField?.value || '',
          image: nextImage,
          description: descriptionField?.value || '',
          tags: String(tagsField?.value || '').split(',').map(item => item.trim()).filter(Boolean),
          price: Number(priceField?.value || 0),
          category: categoryField?.value || '',
          unit: unitField?.value || ''
        });
      };
      reader.readAsDataURL(file);
    });
  }

  form?.querySelectorAll('input, textarea, select').forEach(input => {
    if (input.dataset.previewBound) return;
    input.dataset.previewBound = 'true';
    input.addEventListener('input', () => drawPreview({
      name: nameField?.value || '',
      image: nextImage,
      description: descriptionField?.value || '',
      tags: String(tagsField?.value || '').split(',').map(item => item.trim()).filter(Boolean),
      price: Number(priceField?.value || 0),
      category: categoryField?.value || '',
      unit: unitField?.value || ''
    }));
  });

  if (form && !form.dataset.bound) {
    form.dataset.bound = 'true';
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const editingId = String(data.get('id') || '').trim();
      const freshState = getState();
      const payload = {
        id: editingId || `sv${Date.now()}`,
        name: String(data.get('name') || '').trim(),
        category: String(data.get('category') || '').trim(),
        price: Number(data.get('price') || 0),
        unit: String(data.get('unit') || '').trim(),
        description: String(data.get('description') || '').trim(),
        image: nextImage || '',
        tags: String(data.get('tags') || '').split(',').map(item => item.trim()).filter(Boolean),
        featured: String(data.get('featured') || 'false') === 'true',
        status: 'active'
      };
      if (editingId) {
        const existing = freshState.services.find(item => item.id === editingId);
        if (existing) Object.assign(existing, payload, { image: payload.image || existing.image || '' });
      } else {
        freshState.services.unshift(payload);
      }
      saveState(freshState);
      showToast(editingId ? 'Đã cập nhật dịch vụ.' : 'Đã thêm dịch vụ mới.', 'success');
      resetEditor();
      rerenderPage();
    });
    form.querySelector('[data-service-reset]')?.addEventListener('click', resetEditor);
  }

  servicesRoot?.querySelectorAll('[data-edit-service]').forEach(btn => {
    btn.addEventListener('click', () => {
      const service = state.services.find(item => item.id === btn.dataset.editService);
      if (!service || !form) return;
      if (idField) idField.value = service.id;
      if (nameField) nameField.value = service.name || '';
      if (categoryField) categoryField.value = service.category || '';
      if (priceField) priceField.value = service.price || 0;
      if (unitField) unitField.value = service.unit || '';
      if (tagsField) tagsField.value = (service.tags || []).join(', ');
      if (featuredField) featuredField.value = String(!!service.featured);
      if (descriptionField) descriptionField.value = service.description || '';
      nextImage = service.image || '';
      form.dataset.image = nextImage;
      const submitBtn = form.querySelector('[data-service-submit]');
      if (submitBtn) submitBtn.textContent = 'Cập nhật dịch vụ';
      drawPreview(service);
      window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
    });
  });

  servicesRoot?.querySelectorAll('[data-delete-service]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('Bạn chắc chắn muốn xóa dịch vụ này?')) return;
      try {
        await apiRequest('POST', `/api/services/${btn.dataset.deleteService}/delete`, {});
        await bootstrapState(true);
        showToast('Đã xóa dịch vụ.', 'success');
        rerenderPage();
      } catch (error) {
        showToast(error.message || 'Không thể xóa dịch vụ.', 'error');
      }
    });
  });
}

function renderAdminPayment(state) {
  const previewRoot = document.querySelector('[data-admin-payment-preview]');
  if (previewRoot) {
    previewRoot.innerHTML = `
      <span class="mini-label">Xem trước hiển thị bên khách hàng</span>
      <h3>Thông tin thanh toán hiện tại</h3>
      <div class="payment-card">
        <div class="qr-box ${state.payment.qrImage ? '' : 'qr-placeholder'}">
          ${state.payment.qrImage ? `<img src="${state.payment.qrImage}" alt="QR admin">` : '<div class="qr-empty"><strong>Chưa có QR</strong><span>Tải QR lên để khách hàng quét nhanh hơn.</span></div>'}
        </div>
        <div class="info-pairs">
          <div><span>Ngân hàng</span><strong>${escapeHtml(state.payment.bankName)}</strong></div>
          <div><span>Chủ tài khoản</span><strong>${escapeHtml(state.payment.accountName)}</strong></div>
          <div><span>Số tài khoản</span><strong>${escapeHtml(state.payment.accountNumber)}</strong></div>
          <div><span>Mức nạp khuyến nghị</span><strong>${formatMoney(state.payment.minDeposit)}</strong></div>
        </div>
        <div class="notice">${escapeHtml(state.payment.note)}</div>
      </div>
    `;
  }

  const form = document.getElementById('admin-payment-form');
  if (form) {
    form.bankName.value = state.payment.bankName || '';
    form.accountName.value = state.payment.accountName || '';
    form.accountNumber.value = state.payment.accountNumber || '';
    form.minDeposit.value = state.payment.minDeposit || 0;
    form.note.value = state.payment.note || '';
  }

  if (form && !form.dataset.bound) {
    form.dataset.bound = 'true';
    let nextQrImage = state.payment.qrImage || '';
    const qrUpload = document.querySelector('[data-admin-qr-upload]');
    form.querySelector('[data-clear-qr]')?.addEventListener('click', () => {
      nextQrImage = '';
      const freshState = getState();
      freshState.payment.qrImage = '';
      saveState(freshState);
      showToast('Đã xóa QR hiện tại.', 'info');
      rerenderPage();
    });
    qrUpload?.addEventListener('change', event => {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        nextQrImage = String(reader.result || '');
        const freshState = getState();
        freshState.payment.qrImage = nextQrImage;
        saveState(freshState);
        renderAdminPayment(freshState);
        showToast('Đã cập nhật ảnh QR xem trước.', 'success');
      };
      reader.readAsDataURL(file);
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      const freshState = getState();
      freshState.payment.bankName = form.bankName.value.trim();
      freshState.payment.accountName = form.accountName.value.trim();
      freshState.payment.accountNumber = form.accountNumber.value.trim();
      freshState.payment.minDeposit = Number(form.minDeposit.value || 0);
      freshState.payment.note = form.note.value.trim();
      if (nextQrImage) freshState.payment.qrImage = nextQrImage;
      saveState(freshState);
      showToast('Đã lưu thông tin thanh toán admin.', 'success');
      rerenderPage();
    });
  }
}

function renderAdminDeposits(state) {
  const root = document.querySelector('[data-admin-deposits]');
  if (!root) return;
  const deposits = state.deposits.slice().sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  root.innerHTML = deposits.map(deposit => {
    const customer = state.users.find(item => item.id === deposit.customerId);
    const actions = deposit.status === 'pending'
      ? `
        <div class="table-actions">
          <button class="btn primary small" type="button" data-approve-deposit="${deposit.id}">Duyệt</button>
          <button class="btn ghost small" type="button" data-reject-deposit="${deposit.id}">Từ chối</button>
        </div>
      `
      : '<span class="muted">Đã xử lý</span>';
    return `
      <tr>
        <td>${escapeHtml(deposit.id)}</td>
        <td>${escapeHtml(customer?.fullName || 'Khách hàng')}</td>
        <td>${formatMoney(deposit.amount)}</td>
        <td>${formatCurrency(deposit.coin)}</td>
        <td>${escapeHtml(deposit.note)}</td>
        <td>${statusBadge(deposit.status)}</td>
        <td>${actions}</td>
      </tr>
    `;
  }).join('');

  root.querySelectorAll('[data-approve-deposit]').forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await apiRequest('POST', `/api/deposits/${btn.dataset.approveDeposit}/approve`, {});
        await bootstrapState(true);
        showToast('Đã duyệt lệnh nạp.', 'success');
        rerenderPage();
      } catch (error) {
        showToast(error.message || 'Không duyệt được lệnh nạp.', 'error');
      }
    });
  });

  root.querySelectorAll('[data-reject-deposit]').forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await apiRequest('POST', `/api/deposits/${btn.dataset.rejectDeposit}/reject`, {});
        await bootstrapState(true);
        showToast('Đã từ chối lệnh nạp.', 'info');
        rerenderPage();
      } catch (error) {
        showToast(error.message || 'Không từ chối được lệnh nạp.', 'error');
      }
    });
  });
}

function renderAdminCustomers(state) {
  const customers = state.users.filter(user => user.role === 'customer');
  const customerRoot = document.querySelector('[data-admin-customers-list]');
  const customerPreview = document.querySelector('[data-admin-customer-preview]');
  const customerSearch = document.querySelector('[data-admin-customer-search]');
  const customerFilters = document.querySelector('[data-admin-customer-filters]');
  const paginationRoot = document.querySelector('[data-admin-customer-pagination]');
  if (!customerRoot || !customerPreview || !customerSearch || !customerFilters || !paginationRoot) return;

  let activeFilter = 'all';
  let keyword = '';
  let selectedCustomerId = customers[0]?.id || null;
  let page = 1;
  const pageSize = 5;

  const counts = () => ({
    all: customers.length,
    balance: customers.filter(item => item.balance > 0).length,
    pending: customers.filter(item => customerStats(state, item).pendingDeposits.length > 0).length,
    chat: customers.filter(item => customerStats(state, item).thread.messages.length > 0).length
  });

  const filterList = () => [
    { key: 'all', label: 'Tất cả', count: counts().all },
    { key: 'balance', label: 'Có số dư', count: counts().balance },
    { key: 'pending', label: 'Chờ duyệt nạp', count: counts().pending },
    { key: 'chat', label: 'Có chat', count: counts().chat }
  ];

  const filteredCustomers = () => customers.filter(customer => {
    const stats = customerStats(state, customer);
    const haystack = `${customer.fullName} ${customer.username} ${customer.email}`.toLowerCase();
    const matchesKeyword = !keyword || haystack.includes(keyword);
    const matchesFilter = activeFilter === 'all'
      || (activeFilter === 'balance' && customer.balance > 0)
      || (activeFilter === 'pending' && stats.pendingDeposits.length > 0)
      || (activeFilter === 'chat' && stats.thread.messages.length > 0);
    return matchesKeyword && matchesFilter;
  });

  const drawPreview = customer => {
    if (!customer) {
      customerPreview.innerHTML = '<div class="preview-empty">Không có khách hàng phù hợp.</div>';
      return;
    }
    const stats = customerStats(state, customer);
    customerPreview.innerHTML = `
      <div class="preview-block">
        <span class="mini-label">Xem nhanh hồ sơ</span>
        <div class="customer-card-head"><h3>${escapeHtml(customer.fullName)}</h3>${priorityBadge(stats.pendingDeposits.length ? 'urgent' : stats.thread.messages.length ? 'medium' : 'low')}</div>
        <div class="muted">@${escapeHtml(customer.username)}</div>
        <div class="preview-highlight">
          <div class="inline-dot">Hoạt động gần nhất: ${escapeHtml(stats.latestTouch)}</div>
          <div class="muted">${escapeHtml(stats.lastMessage?.text || customer.bio || 'Chưa có ghi chú mới.')}</div>
        </div>
      </div>
      <div class="preview-metrics">
        <div class="preview-mini-card"><span class="mini-label">Số dư</span><strong>${formatCurrency(customer.balance)}</strong></div>
        <div class="preview-mini-card"><span class="mini-label">Đơn hàng</span><strong>${stats.orders.length}</strong></div>
        <div class="preview-mini-card"><span class="mini-label">Lệnh nạp</span><strong>${stats.deposits.length}</strong></div>
        <div class="preview-mini-card"><span class="mini-label">Tin nhắn</span><strong>${stats.thread.messages.length}</strong></div>
      </div>
      <div class="preview-block">
        <span class="mini-label">Thông tin liên hệ</span>
        <div class="info-pairs">
          <div><span>Email</span><strong>${escapeHtml(customer.email || 'Chưa cập nhật')}</strong></div>
          <div><span>Điện thoại</span><strong>${escapeHtml(customer.phone || 'Chưa cập nhật')}</strong></div>
          <div><span>Địa chỉ</span><strong>${escapeHtml(customer.address || 'Chưa cập nhật')}</strong></div>
        </div>
      </div>
      <div class="preview-actions">
        <button class="btn ghost small" type="button" data-preview-open-detail="${customer.id}">Xem popup chi tiết</button>
      </div>
    `;
    customerPreview.querySelector('[data-preview-open-detail]')?.addEventListener('click', () => openCustomerDetailModal(customer.id));
  };

  const drawFilters = () => {
    customerFilters.innerHTML = filterList().map(item => `
      <button class="tab-chip admin-filter-chip ${item.key === activeFilter ? 'active' : ''}" type="button" data-admin-filter="${item.key}">
        ${item.label} (${item.count})
      </button>
    `).join('');
    customerFilters.querySelectorAll('[data-admin-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.adminFilter;
        page = 1;
        drawAll();
      });
    });
  };

  const drawRows = () => {
    const list = filteredCustomers();
    const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
    if (page > totalPages) page = totalPages;
    const paged = list.slice((page - 1) * pageSize, page * pageSize);
    if (!paged.some(item => item.id === selectedCustomerId)) selectedCustomerId = paged[0]?.id || list[0]?.id || null;

    customerRoot.innerHTML = paged.length ? paged.map(customer => {
      const stats = customerStats(state, customer);
      const priority = stats.pendingDeposits.length ? 'urgent' : stats.thread.messages.length ? 'medium' : 'low';
      return `
        <tr class="${customer.id === selectedCustomerId ? 'is-selected' : ''}" data-admin-row="${customer.id}">
          <td><div class="customer-name-cell"><strong>${escapeHtml(customer.fullName)}</strong><span class="cell-muted">@${escapeHtml(customer.username)}</span></div></td>
          <td><div class="customer-name-cell"><span>${escapeHtml(customer.email)}</span><span class="cell-muted">${escapeHtml(customer.phone || 'Chưa có SĐT')}</span></div></td>
          <td><strong>${formatCurrency(customer.balance)}</strong></td>
          <td>${stats.orders.length}</td>
          <td>${stats.pendingDeposits.length ? statusBadge('pending') : '<span class="muted">0</span>'}</td>
          <td>${priorityBadge(priority)}</td>
          <td><div class="table-actions"><button class="btn ghost small" type="button" data-admin-view="${customer.id}">Chi tiết</button></div></td>
        </tr>
      `;
    }).join('') : '<tr><td colspan="7"><div class="empty-state">Không tìm thấy khách hàng phù hợp.</div></td></tr>';

    paginationRoot.innerHTML = `
      <button class="btn ghost small" type="button" data-page-prev ${page <= 1 ? 'disabled' : ''}>← Trước</button>
      <span class="cell-muted">Trang ${page}/${totalPages}</span>
      <button class="btn ghost small" type="button" data-page-next ${page >= totalPages ? 'disabled' : ''}>Sau →</button>
    `;

    paginationRoot.querySelector('[data-page-prev]')?.addEventListener('click', () => { if (page > 1) { page -= 1; drawAll(); } });
    paginationRoot.querySelector('[data-page-next]')?.addEventListener('click', () => { if (page < totalPages) { page += 1; drawAll(); } });

    customerRoot.querySelectorAll('[data-admin-row], [data-admin-view]').forEach(el => {
      el.addEventListener('click', event => {
        selectedCustomerId = event.currentTarget.dataset.adminRow || event.currentTarget.dataset.adminView;
        if (event.currentTarget.dataset.adminView) openCustomerDetailModal(selectedCustomerId);
        drawAll();
      });
    });

    drawPreview(list.find(item => item.id === selectedCustomerId) || paged[0] || null);
  };

  const drawAll = () => {
    drawFilters();
    drawRows();
  };

  customerSearch.oninput = event => {
    keyword = String(event.target.value || '').trim().toLowerCase();
    page = 1;
    drawAll();
  };

  drawAll();
}

function renderAdminChat(state) {
  const listRoot = document.querySelector('[data-admin-chat-list]');
  const messagesRoot = document.querySelector('[data-admin-chat-messages]');
  const form = document.getElementById('admin-chat-form');
  if (!listRoot || !messagesRoot || !form) return;

  const customers = state.users.filter(user => user.role === 'customer');
  let selectedId = listRoot.dataset.selectedId || customers[0]?.id || '';

  const drawList = () => {
    listRoot.dataset.selectedId = selectedId;
    listRoot.innerHTML = customers.map(customer => {
      const thread = state.chats.find(item => item.customerId === customer.id) || { messages: [] };
      const last = thread.messages[thread.messages.length - 1];
      return `
        <button class="conversation-item ${customer.id === selectedId ? 'active' : ''}" type="button" data-chat-customer="${customer.id}">
          <strong>${escapeHtml(customer.fullName)}</strong>
          <span>@${escapeHtml(customer.username)}</span>
          <small>${escapeHtml(last?.text || 'Chưa có hội thoại')}</small>
          <em>${escapeHtml(last?.time || '')}</em>
        </button>
      `;
    }).join('');
    listRoot.querySelectorAll('[data-chat-customer]').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedId = btn.dataset.chatCustomer;
        drawAll();
      });
    });
  };

  const drawMessages = () => {
    const thread = state.chats.find(item => item.customerId === selectedId) || { messages: [] };
    const customer = customers.find(item => item.id === selectedId);
    messagesRoot.innerHTML = `
      <div class="chat-thread-head">
        <div>
          <span class="mini-label">Đang trò chuyện</span>
          <h3>${escapeHtml(customer?.fullName || 'Chọn khách hàng')}</h3>
        </div>
      </div>
      ${thread.messages.length ? thread.messages.map(msg => `
        <div class="chat-message ${msg.sender === 'admin' ? 'admin' : 'customer'}">
          <div>${escapeHtml(msg.text)}</div>
          <span class="chat-meta">${msg.sender === 'admin' ? 'Admin' : 'Khách hàng'} • ${escapeHtml(msg.time)}</span>
        </div>
      `).join('') : '<div class="empty-state">Chưa có tin nhắn.</div>'}
    `;
    messagesRoot.scrollTop = messagesRoot.scrollHeight;
  };

  const drawAll = () => {
    const freshState = getState();
    state.chats = freshState.chats;
    drawList();
    drawMessages();
  };

  if (!form.dataset.bound) {
    form.dataset.bound = 'true';
    form.addEventListener('submit', event => {
      event.preventDefault();
      const textarea = form.querySelector('textarea');
      const text = String(textarea.value || '').trim();
      if (!text || !selectedId) return;
      const freshState = getState();
      let thread = freshState.chats.find(item => item.customerId === selectedId);
      if (!thread) {
        thread = { customerId: selectedId, messages: [] };
        freshState.chats.push(thread);
      }
      thread.messages.push({ sender: 'admin', text, time: nowString() });
      saveState(freshState);
      textarea.value = '';
      state.chats = freshState.chats;
      drawAll();
      showToast('Đã gửi phản hồi cho khách hàng.', 'success');
    });
  }

  drawAll();
}

function renderAdminShell(currentKey) {
  const admin = ensureAccess(getPage());
  if (!admin) return null;

  setText('[data-admin-name]', admin.fullName);
  setText('[data-admin-username]', `@${admin.username}`);
  setText('[data-admin-email]', admin.email);
  setText('[data-admin-avatar]', initials(admin.fullName));
  document.querySelectorAll('[data-admin-logout]').forEach(btn => btn.addEventListener('click', logout));

  const permissionByKey = {
    'admin-overview': 'admin',
    'admin-services': 'services',
    'admin-customers': 'customers',
    'admin-payment': 'payment',
    'admin-chat': 'chat',
    'admin-settings': 'settings'
  };
  const allowedNav = ADMIN_NAV.filter(item => APP_PERMISSIONS.includes(permissionByKey[item.key]) || admin.role === 'admin');

  const navRoot = document.querySelector('[data-admin-nav]');
  if (navRoot) {
    navRoot.innerHTML = `
      <a class="side-link" href="${routeTo('index.html')}">← Trang chủ website</a>
      ${allowedNav.map(item => `<a class="side-link ${item.key === currentKey ? 'active' : ''}" href="${item.href}">${item.icon} ${item.label}</a>`).join('')}
    `;
  }

  const mobileRoot = document.querySelector('[data-admin-mobile-nav]');
  if (mobileRoot) {
    const links = [...allowedNav, { href: routeTo('index.html'), key: 'site-home', label: 'Trang chủ', icon: '🌐' }];
    mobileRoot.innerHTML = links.map(item => `<a class="${item.key === currentKey ? 'active' : ''}" href="${item.href}"><span class="icon">${item.icon}</span><span>${item.label}</span></a>`).join('');
  }

  return admin;
}

function renderAdminOrdersSection(state) {
  const adminMain = document.querySelector('.admin-main');
  if (!adminMain) return;

  let section = adminMain.querySelector('[data-admin-orders-section]');
  if (!section) {
    section = document.createElement('section');
    section.className = 'card shell-card';
    section.setAttribute('data-admin-orders-section', '');
    const beforeNode = adminMain.querySelector('.history-columns');
    adminMain.insertBefore(section, beforeNode || adminMain.lastElementChild);
  }

  const activeFilter = section.dataset.filter || 'all';
  const filterButtons = [
    ['all', 'Tất cả'],
    ['pending', 'Chờ xử lý'],
    ['processing', 'Đang xử lý'],
    ['need_info', 'Cần bổ sung'],
    ['completed', 'Hoàn thành'],
    ['refunded', 'Hoàn coin'],
    ['rejected', 'Từ chối']
  ];

  const orders = (state.orders || []).filter(order => activeFilter === 'all' ? true : order.status === activeFilter);

  section.innerHTML = `
    <div class="section-head compact">
      <div>
        <span class="mini-label">Đơn hàng realtime</span>
        <h2>Admin xử lý đơn hàng của khách</h2>
        <p>Giữ nguyên các mục cũ, chỉ thêm bảng xử lý đơn để admin đổi trạng thái, ghi chú, hoàn coin và thông báo sang chat.</p>
      </div>
    </div>

    <div class="tab-scroll admin-filter-chips" data-admin-order-filters>
      ${filterButtons.map(([key, label]) => `
        <button class="tab-chip ${key === activeFilter ? 'active' : ''}" type="button" data-admin-order-filter="${key}">
          ${label}
        </button>
      `).join('')}
    </div>

    <div class="admin-order-grid" data-admin-orders-root></div>
  `;

  const root = section.querySelector('[data-admin-orders-root]');

  root.innerHTML = orders.length ? orders.map(order => {
    const customer = state.users.find(user => user.id === order.customerId);
    const statusMeta = orderStatusMeta(order.status);

    return `
      <article class="shell-card admin-order-card">
        <div class="split-line">
          <div>
            <span class="mini-label">Mã đơn</span>
            <h3>${escapeHtml(order.id)}</h3>
            <p class="muted">${escapeHtml(customer?.fullName || customer?.username || 'Khách hàng')}</p>
          </div>
          <span class="badge ${statusMeta.className}">${statusMeta.label}</span>
        </div>

        <div class="detail-list">
          <li><span>Dịch vụ</span><strong>${escapeHtml(order.serviceName)}</strong></li>
          <li><span>Số lượng</span><strong>${order.quantity}</strong></li>
          <li><span>Tổng coin</span><strong>${formatCurrency(order.totalCoin)}</strong></li>
          <li><span>Yêu cầu</span><strong>${escapeHtml(order.requestDetail || '--')}</strong></li>
          <li><span>Mục xử lý</span><strong>${escapeHtml(order.targetLabel || '--')}</strong></li>
          <li><span>Ghi chú khách</span><strong>${escapeHtml(order.note || '--')}</strong></li>
        </div>

        <div class="admin-order-fields">
          <label>
            <span class="mini-label">Ghi chú admin</span>
            <textarea class="textarea" rows="3" data-order-admin-note="${escapeHtml(order.id)}">${escapeHtml(order.adminNote || '')}</textarea>
          </label>

          <label>
            <span class="mini-label">Kết quả xử lý</span>
            <textarea class="textarea" rows="3" data-order-result-note="${escapeHtml(order.id)}">${escapeHtml(order.resultNote || '')}</textarea>
          </label>

          <label>
            <span class="mini-label">Mã tham chiếu</span>
            <input class="input" type="text" value="${escapeHtml(order.referenceCode || '')}" data-order-reference="${escapeHtml(order.id)}" placeholder="Ví dụ: REF-2026-001">
          </label>

          <label>
            <span class="mini-label">Hoàn coin</span>
            <input class="input" type="number" min="0" step="1" value="${Number(order.refundAmount || 0)}" data-order-refund="${escapeHtml(order.id)}">
          </label>
        </div>

        <div class="table-actions admin-order-actions">
          <button class="btn secondary small" type="button" data-order-status="${escapeHtml(order.id)}" data-next-status="processing">Nhận xử lý</button>
          <button class="btn ghost small" type="button" data-order-status="${escapeHtml(order.id)}" data-next-status="need_info">Cần bổ sung</button>
          <button class="btn primary small" type="button" data-order-status="${escapeHtml(order.id)}" data-next-status="completed">Hoàn thành</button>
          <button class="btn ghost small" type="button" data-order-status="${escapeHtml(order.id)}" data-next-status="rejected">Từ chối</button>
          <button class="btn ghost small" type="button" data-order-status="${escapeHtml(order.id)}" data-next-status="refunded">Hoàn coin</button>
          <button class="btn ghost small" type="button" data-copy-order-ref="${escapeHtml(order.referenceCode || '')}">Sao chép tham chiếu</button>
        </div>
      </article>
    `;
  }).join('') : '<div class="empty-state">Chưa có đơn hàng phù hợp bộ lọc này.</div>';

  section.querySelectorAll('[data-admin-order-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      section.dataset.filter = btn.dataset.adminOrderFilter;
      renderAdminOrdersSection(getState());
    });
  });

  root.querySelectorAll('[data-copy-order-ref]').forEach(btn => {
    btn.addEventListener('click', () => {
      const value = btn.dataset.copyOrderRef;
      if (!value) {
        showToast('Đơn này chưa có mã tham chiếu.', 'error');
        return;
      }
      copyText(value);
    });
  });

  root.querySelectorAll('[data-order-status]').forEach(btn => {
    btn.addEventListener('click', () => {
      const stateNow = getState();
      const order = stateNow.orders.find(item => item.id === btn.dataset.orderStatus);
      if (!order) return;

      const adminNoteInput = root.querySelector(`[data-order-admin-note="${order.id}"]`);
      const resultNoteInput = root.querySelector(`[data-order-result-note="${order.id}"]`);
      const referenceInput = root.querySelector(`[data-order-reference="${order.id}"]`);
      const refundInput = root.querySelector(`[data-order-refund="${order.id}"]`);

      order.adminNote = String(adminNoteInput?.value || '').trim();
      order.resultNote = String(resultNoteInput?.value || '').trim();
      order.referenceCode = String(referenceInput?.value || '').trim();
      order.refundAmount = Math.max(0, Number(refundInput?.value || 0));
      order.status = btn.dataset.nextStatus;
      order.updatedAt = new Date().toLocaleString('vi-VN');

      if (order.status === 'refunded' && order.refundAmount > 0 && !order.refundApplied) {
        const customer = stateNow.users.find(user => user.id === order.customerId);
        if (customer) {
          customer.balance += order.refundAmount;
        }
        order.refundApplied = true;
      }

      pushOrderTimeline(
        order,
        `Chuyển trạng thái: ${formatOrderStatus(order.status)}`,
        'admin',
        order.adminNote || order.resultNote || order.referenceCode || ''
      );

      addSystemMessageToChat(
        stateNow,
        order.customerId,
        `Đơn ${order.id} đã được cập nhật: ${formatOrderStatus(order.status)}. ${order.resultNote ? `Kết quả: ${order.resultNote}` : ''} ${order.referenceCode ? `Mã tham chiếu: ${order.referenceCode}` : ''}`.trim()
      );

      saveState(stateNow);
      showToast('Đã cập nhật đơn hàng.', 'success');
      renderAdminPage();
    });
  });
}

function renderAdminOverviewPage() {
  const admin = renderAdminShell('admin-overview');
  if (!admin) return;
  const state = getState();
  const orders = state.orders || [];
  const pendingOrders = orders.filter(item => item.status === 'pending').length;
  const processingOrders = orders.filter(item => item.status === 'processing').length;
  const refundOrders = orders.filter(item => item.status === 'refunded').length;
  const customers = state.users.filter(user => user.role === 'customer');
  const pendingDeposits = state.deposits.filter(item => item.status === 'pending').length;
  const unreadThreads = state.chats.filter(thread => thread.messages[thread.messages.length - 1]?.sender === 'customer').length;

  const kpiRoot = document.querySelector('[data-admin-kpis]');
  if (kpiRoot) {
    kpiRoot.innerHTML = `
      <div class="kpi-card"><span class="mini-label">Khách hàng</span><strong>${customers.length}</strong></div>
      <div class="kpi-card"><span class="mini-label">Dịch vụ mở bán</span><strong>${activeServices(state).length}</strong></div>
      <div class="kpi-card"><span class="mini-label">Đơn chờ xử lý</span><strong>${pendingOrders}</strong></div>
      <div class="kpi-card"><span class="mini-label">Đơn đang xử lý</span><strong>${processingOrders}</strong></div>
      <div class="kpi-card"><span class="mini-label">Đơn hoàn coin</span><strong>${refundOrders}</strong></div>
      <div class="kpi-card"><span class="mini-label">Nạp chờ duyệt</span><strong>${pendingDeposits}</strong></div>
      <div class="kpi-card"><span class="mini-label">Hội thoại cần xem</span><strong>${unreadThreads}</strong></div>
    `;
  }

  const quickRoot = document.querySelector('[data-admin-quick-links]');
  if (quickRoot) {
    quickRoot.innerHTML = `
      <a class="quick-link-card" href="services.html"><span class="mini-label">Dịch vụ</span><h3>Thêm dịch vụ trên trang riêng</h3><p class="muted">Form lớn hơn, có khu lưu API/key và bảng riêng nên không phải cuộn quá dài.</p></a>
      <a class="quick-link-card" href="customers.html"><span class="mini-label">Khách hàng</span><h3>Quản lý hồ sơ và thu chi</h3><p class="muted">Bảng khách hàng, popup chi tiết và lệnh nạp đặt cùng một trang chuyên trách.</p></a>
      <a class="quick-link-card" href="payment.html"><span class="mini-label">Thanh toán</span><h3>QR + thông tin nhận tiền</h3><p class="muted">Cập nhật QR, ngân hàng, email, điện thoại và giữ lại sau khi tải lại trang.</p></a>
      <a class="quick-link-card" href="chat.html"><span class="mini-label">Live chat</span><h3>Khung chat riêng</h3><p class="muted">Nhắn khách hàng nhanh hơn mà không bị lẫn với những khối quản trị khác.</p></a>
      ${(APP_PERMISSIONS.includes('reports') || admin.role === 'admin') ? `<div class="quick-link-card report-card"><span class="mini-label">Báo cáo</span><h3>Xuất Excel / PDF</h3><p class="muted">Lấy báo cáo tổng hợp khách hàng, đơn hàng và lệnh nạp chỉ với một nút bấm.</p><div class="admin-report-links"><a class="btn secondary small" href="/api/reports/export.xlsx">Xuất Excel</a><a class="btn ghost small" href="/api/reports/export.pdf">Xuất PDF</a></div></div>` : ''}
    `;
  }

  const urgentRoot = document.querySelector('[data-admin-urgent]');
  if (urgentRoot) {
    const urgentDeposits = state.deposits.filter(item => item.status === 'pending').slice(0, 5);
    urgentRoot.innerHTML = urgentDeposits.length ? urgentDeposits.map(item => {
      const customer = state.users.find(user => user.id === item.customerId);
      return `<div class="list-card"><div class="customer-card-head"><strong>${escapeHtml(customer?.fullName || 'Khách hàng')}</strong>${statusBadge(item.status)}</div><div class="detail-row"><span>${escapeHtml(item.id)}</span><strong>${formatMoney(item.amount)}</strong></div><div class="muted">${escapeHtml(item.note)}</div></div>`;
    }).join('') : '<div class="empty-state">Hiện không có lệnh nạp nào chờ duyệt.</div>';
  }

  const ordersRoot = document.querySelector('[data-admin-orders]');
  if (ordersRoot) {
    ordersRoot.innerHTML = `
      <section class="card">
        <div class="split-line">
          <div>
            <span class="mini-label">Đơn hàng realtime</span>
            <h2>Danh sách đơn cần xử lý</h2>
          </div>
          <div class="page-tools">
            <button class="tab-chip active" type="button" data-admin-order-filter="all">Tất cả</button>
            <button class="tab-chip" type="button" data-admin-order-filter="pending">Chờ xử lý</button>
            <button class="tab-chip" type="button" data-admin-order-filter="processing">Đang xử lý</button>
            <button class="tab-chip" type="button" data-admin-order-filter="need_info">Cần bổ sung</button>
            <button class="tab-chip" type="button" data-admin-order-filter="completed">Hoàn thành</button>
            <button class="tab-chip" type="button" data-admin-order-filter="refunded">Hoàn coin</button>
          </div>
        </div>

        <div data-admin-orders></div>
      </section>
    `;
  }
  renderAdminOrdersSection(state);
}

function renderAdminOrdersBlock() {
  const state = getState();
  const root = document.querySelector('[data-admin-orders]');
  if (!root) return;

  let activeFilter = 'all';

  function draw() {
    const freshState = getState();
    const usersMap = new Map((freshState.users || []).map(user => [user.id, user]));
    const orders = (freshState.orders || []).filter(order => {
      return activeFilter === 'all' ? true : order.status === activeFilter;
    });

    root.innerHTML = orders.length ? orders.map(order => {
      const customer = usersMap.get(order.customerId);
      const statusMeta = orderStatusMeta(order.status);

      return `
        <article class="card">
          <div class="split-line">
            <div>
              <span class="mini-label">Mã đơn</span>
              <h3>${escapeHtml(order.id)}</h3>
              <p class="muted">${escapeHtml(customer?.fullName || customer?.username || 'Khách hàng')}</p>
            </div>
            <span class="badge ${statusMeta.className}">${statusMeta.label}</span>
          </div>

          <div class="detail-list">
            <li><span>Dịch vụ</span><strong>${escapeHtml(order.serviceName)}</strong></li>
            <li><span>Số lượng</span><strong>${order.quantity}</strong></li>
            <li><span>Tổng coin</span><strong>${formatCurrency(order.totalCoin)}</strong></li>
            <li><span>Ghi chú khách</span><strong>${escapeHtml(order.note || '--')}</strong></li>
            <li><span>Tham chiếu</span><strong>${escapeHtml(order.referenceCode || '--')}</strong></li>
            <li><span>Hoàn coin</span><strong>${formatCurrency(order.refundAmount || 0)}</strong></li>
          </div>

          <div class="form-grid">
            <label>
              <span class="mini-label">Ghi chú admin</span>
              <textarea class="textarea" rows="3" data-order-admin-note="${escapeHtml(order.id)}">${escapeHtml(order.adminNote || '')}</textarea>
            </label>

            <label>
              <span class="mini-label">Kết quả xử lý</span>
              <textarea class="textarea" rows="3" data-order-result-note="${escapeHtml(order.id)}">${escapeHtml(order.resultNote || '')}</textarea>
            </label>

            <label>
              <span class="mini-label">Mã tham chiếu</span>
              <input class="input" type="text" value="${escapeHtml(order.referenceCode || '')}" data-order-reference="${escapeHtml(order.id)}">
            </label>

            <label>
              <span class="mini-label">Hoàn coin</span>
              <input class="input" type="number" min="0" step="1" value="${Number(order.refundAmount || 0)}" data-order-refund="${escapeHtml(order.id)}">
            </label>
          </div>

          <div class="page-tools">
            <button class="btn secondary small" type="button" data-order-status="${escapeHtml(order.id)}" data-next-status="processing">Nhận xử lý</button>
            <button class="btn ghost small" type="button" data-order-status="${escapeHtml(order.id)}" data-next-status="need_info">Cần bổ sung</button>
            <button class="btn primary small" type="button" data-order-status="${escapeHtml(order.id)}" data-next-status="completed">Hoàn thành</button>
            <button class="btn ghost small" type="button" data-order-status="${escapeHtml(order.id)}" data-next-status="rejected">Từ chối</button>
            <button class="btn ghost small" type="button" data-order-status="${escapeHtml(order.id)}" data-next-status="refunded">Hoàn coin</button>
            <button class="btn ghost small" type="button" data-open-customer-chat="${escapeHtml(order.customerId)}">Mở chat khách</button>
          </div>
        </article>
      `;
    }).join('') : '<div class="empty-state">Chưa có đơn phù hợp bộ lọc này.</div>';

    root.querySelectorAll('[data-order-status]').forEach(btn => {
      btn.addEventListener('click', () => {
        const stateNow = getState();
        const order = stateNow.orders.find(item => item.id === btn.dataset.orderStatus);
        if (!order) return;

        const adminNoteInput = document.querySelector(`[data-order-admin-note="${order.id}"]`);
        const resultNoteInput = document.querySelector(`[data-order-result-note="${order.id}"]`);
        const referenceInput = document.querySelector(`[data-order-reference="${order.id}"]`);
        const refundInput = document.querySelector(`[data-order-refund="${order.id}"]`);

        order.adminNote = adminNoteInput?.value.trim() || '';
        order.resultNote = resultNoteInput?.value.trim() || '';
        order.referenceCode = referenceInput?.value.trim() || '';
        order.refundAmount = Number(refundInput?.value || 0);
        order.status = btn.dataset.nextStatus;
        order.updatedAt = new Date().toLocaleString('vi-VN');

        if (order.status === 'refunded' && order.refundAmount > 0) {
          const customer = stateNow.users.find(user => user.id === order.customerId);
          if (customer) {
            customer.balance += order.refundAmount;
          }
        }

        pushOrderTimeline(order, `Cập nhật: ${formatOrderStatus(order.status)}`, 'admin', order.adminNote || order.resultNote || '');
        addSystemMessageToChat(
          stateNow,
          order.customerId,
          `Đơn ${order.id} đã được cập nhật sang trạng thái "${formatOrderStatus(order.status)}". ${order.resultNote ? `Kết quả: ${order.resultNote}` : ''} ${order.referenceCode ? `Mã tham chiếu: ${order.referenceCode}` : ''}`.trim()
        );

        saveState(stateNow).then(() => {
          showToast('Đã cập nhật đơn hàng.', 'success');
          draw();
        });
      });
    });

    root.querySelectorAll('[data-open-customer-chat]').forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.href = './chat.html';
      });
    });
  }

  document.querySelectorAll('[data-admin-order-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-admin-order-filter]').forEach(item => item.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.adminOrderFilter;
      draw();
    });
  });

  draw();
}

function renderAdminServicesPage() {
  const admin = renderAdminShell('admin-services');
  if (!admin) return;
  const state = getState();
  renderAdminServices(state);
  renderAdminServiceIntegration(state);
}

function renderAdminCustomersPage() {
  const admin = renderAdminShell('admin-customers');
  if (!admin) return;
  const state = getState();
  renderAdminCustomers(state);
  renderAdminDeposits(state);
}

function renderAdminPaymentPage() {
  const admin = renderAdminShell('admin-payment');
  if (!admin) return;
  const state = getState();
  renderAdminPayment(state);
  renderAdminCompanySettings(state);
}

function renderAdminChatPage() {
  const admin = renderAdminShell('admin-chat');
  if (!admin) return;
  renderAdminChat(getState());
}

function renderAdminSettingsPage() {
  const admin = renderAdminShell('admin-settings');
  if (!admin) return;
  const state = getState();
  renderAdminCompanySettings(state);
  renderAdminServiceIntegration(state);
}

function renderAdminCurrentPage() {
  const page = getPage();
  if (page === 'admin' || page === 'admin-overview') return renderAdminOverviewPage();
  if (page === 'admin-services') return renderAdminServicesPage();
  if (page === 'admin-customers') return renderAdminCustomersPage();
  if (page === 'admin-payment') return renderAdminPaymentPage();
  if (page === 'admin-chat') return renderAdminChatPage();
  if (page === 'admin-settings') return renderAdminSettingsPage();
}

function renderAdminServiceIntegration(state) {
  const form = document.getElementById('admin-integration-form');
  const previewRoot = document.querySelector('[data-admin-integration-preview]');
  if (previewRoot) {
    previewRoot.innerHTML = `
      <span class="mini-label">Kết nối ngoài</span>
      <h3>Gắn endpoint và key một lần</h3>
      <div class="feature-list">
        <article><strong>Endpoint</strong><div class="muted line-clamp-2">${escapeHtml(state.integration.endpoint || 'Chưa cấu hình endpoint')}</div></article>
        <article><strong>Auth</strong><div class="muted">${escapeHtml(state.integration.authType || 'bearer')} ${state.integration.enabled ? '• Đã bật' : '• Chưa bật'}</div></article>
        <article><strong>Mapping</strong><div class="muted">Tên: ${escapeHtml(state.integration.nameField)} • Giá: ${escapeHtml(state.integration.priceField)} • Danh mục: ${escapeHtml(state.integration.categoryField)}</div></article>
      </div>
      <div class="notice">Nếu API ngoài trả JSON và cho phép CORS, bạn có thể bấm đồng bộ để lấy dịch vụ vào web hiện tại. Nếu bên ngoài chặn trình duyệt, sau này chỉ cần đặt thêm backend/proxy là dùng được tiếp.</div>
    `;
  }
  if (!form) return;
  const config = state.integration || {};
  const fields = ['endpoint','apiKey','servicePath','nameField','categoryField','priceField','unitField','descriptionField','tagsField','featuredField','statusField','syncEveryMinutes','webhookSecret'];
  fields.forEach(key => { if (form[key]) form[key].value = config[key] || ''; });
  if (form.authType) form.authType.value = config.authType || 'bearer';
  if (form.enabled) form.enabled.checked = !!config.enabled;
  if (!form.dataset.bound) {
    form.dataset.bound = 'true';
    form.addEventListener('submit', event => {
      event.preventDefault();
      const freshState = getState();
      freshState.integration = {
        enabled: !!form.enabled.checked,
        endpoint: String(form.endpoint.value || '').trim(),
        apiKey: String(form.apiKey.value || '').trim(),
        authType: String(form.authType.value || 'bearer').trim(),
        servicePath: String(form.servicePath.value || '').trim(),
        nameField: String(form.nameField.value || 'name').trim(),
        categoryField: String(form.categoryField.value || 'category').trim(),
        priceField: String(form.priceField.value || 'price').trim(),
        unitField: String(form.unitField.value || 'unit').trim(),
        descriptionField: String(form.descriptionField.value || 'description').trim(),
        tagsField: String(form.tagsField.value || 'tags').trim(),
        featuredField: String(form.featuredField.value || 'featured').trim(),
        statusField: String(form.statusField.value || 'status').trim(),
        syncEveryMinutes: Number(form.syncEveryMinutes?.value || 60),
        webhookSecret: String(form.webhookSecret?.value || '').trim()
      };
      saveState(freshState);
      showToast('Đã lưu cấu hình kết nối dịch vụ.', 'success');
      rerenderPage();
    });
    const syncBtn = form.querySelector('[data-sync-services]');
    syncBtn?.addEventListener('click', async () => {
      const freshState = getState();
      const cfg = freshState.integration || {};
      if (!cfg.endpoint) return showToast('Hãy nhập endpoint API trước.', 'error');
      try {
        const headers = { Accept: 'application/json' };
        if (cfg.apiKey) {
          if (cfg.authType === 'x-api-key') headers['x-api-key'] = cfg.apiKey;
          else headers.Authorization = `Bearer ${cfg.apiKey}`;
        }
        const result = await apiRequest('POST', '/api/integrations/sync', {});
        await bootstrapState(true);
        showToast(`Đã đồng bộ ${result.changed || 0} dịch vụ từ API.`, 'success');
        rerenderPage();
      } catch (error) {
        showToast(`Đồng bộ thất bại: ${error.message}.`, 'error');
      }
    });
  }
}

function renderAdminCompanySettings(state) {
  const form = document.getElementById('admin-company-form');
  const previewRoot = document.querySelector('[data-admin-company-preview]');
  if (previewRoot) {
    previewRoot.innerHTML = `
      <span class="mini-label">Thông tin doanh nghiệp</span>
      <h3>${escapeHtml(state.company.name)}</h3>
      <div class="info-pairs">
        <div><span>Slogan</span><strong>${escapeHtml(state.company.slogan)}</strong></div>
        <div><span>Email hỗ trợ</span><strong>${escapeHtml(state.company.supportEmail)}</strong></div>
        <div><span>Telegram hỗ trợ</span><strong><a href="${state.company.supportTelegram}" target="_blank">@Mmo_white</a></strong></div>
        <div><span>Điện thoại</span><strong>${escapeHtml(state.company.supportPhone)}</strong></div>
        <div><span>Địa chỉ</span><strong>${escapeHtml(state.company.address)}</strong></div>
        <div><span>Người phụ trách</span><strong>${escapeHtml(state.company.adminName)} • ${escapeHtml(state.company.adminTitle)}</strong></div>
      </div>
      <div class="notice">Thông tin này được dùng lại cho footer, trang khách hàng, thương hiệu đầu trang và phần thanh toán.</div>
    `;
  }
  if (!form) return;
  const fields = ['name','slogan','about','adminName','adminTitle','supportEmail','supportTelegram','supportPhone','address','trustText'];
  const getField = key => form.querySelector(`[name="${key}"]`);
  fields.forEach(key => { const input = getField(key); if (input) input.value = state.company[key] || ''; });
  if (!form.dataset.bound) {
    form.dataset.bound = 'true';
    form.addEventListener('submit', event => {
      event.preventDefault();
      const freshState = getState();
      fields.forEach(key => { const input = getField(key); freshState.company[key] = String(input?.value || '').trim(); });
      const adminUser = freshState.users.find(user => user.role === 'admin');
      if (adminUser) {
        adminUser.fullName = freshState.company.adminName || adminUser.fullName;
        adminUser.email = freshState.company.supportEmail || adminUser.email;
        adminUser.phone = freshState.company.supportPhone || adminUser.phone;
        adminUser.address = freshState.company.address || adminUser.address;
      }
      saveState(freshState);
      renderBrand();
      renderFooter();
      showToast('Đã lưu thông tin doanh nghiệp.', 'success');
      rerenderPage();
    });
  }
}

async function init() {
  await bootstrapState();

  renderBrand();
  renderFooter();

  const page = document.body.dataset.page || 'home';
  if (page === 'home') renderHome();
  if (page === 'auth') renderAuth();
  if (page === 'entry') renderAuth();
  if (page === 'customer-overview') renderCustomerOverview();
  if (page === 'customer-services') renderServicesPage();
  if (page === 'customer-wallet') renderWalletPage();
  if (page === 'customer-history') renderHistoryPage();
  if (page === 'customer-profile') renderProfilePage();
  if (page === 'customer-support') renderSupportPage();
  if (page.startsWith('admin')) renderAdminCurrentPage();

  if (typeof setupMobileEnterpriseUI === 'function') {
    setupMobileEnterpriseUI();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});

window.forceResetPthConfig = function () {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(`${STORAGE_KEY}_config_version`);
  localStorage.removeItem(CURRENT_USER_KEY);
  window.location.reload();
};
