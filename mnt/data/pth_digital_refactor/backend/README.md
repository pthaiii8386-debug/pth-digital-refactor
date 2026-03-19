# PTH DIGITAL Enterprise Backend

Backend API cho hệ thống PTH DIGITAL - Nền tảng dịch vụ số chuyên nghiệp.

## Tính năng

- 🔐 Authentication & Authorization (JWT)
- 👥 Quản lý người dùng (Admin, Support, Accountant, Customer)
- 📊 Báo cáo Excel & PDF tự động
- 💳 Tích hợp thanh toán
- 📧 Tích hợp dịch vụ email (TinOTP)
- 🔄 Đồng bộ dữ liệu tự động
- 🛡️ Bảo mật nâng cao (Helmet, CORS, Rate Limiting)
- 📈 Giám sát sức khỏe hệ thống

## Cài đặt

```bash
npm install
```

## Chạy

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## Cấu hình

Tạo file `.env` từ `.env.example`:

```bash
cp .env.example .env
```

Các biến môi trường cần thiết:
- `JWT_SECRET`: Secret key cho JWT
- `PORT`: Port server (mặc định 3000)
- `TINOTP_API_KEY`: API key cho TinOTP (tùy chọn)

## API Endpoints

### Authentication
- `POST /api/auth/login` - Đăng nhập
- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/logout` - Đăng xuất
- `GET /api/auth/me` - Thông tin user hiện tại

### Reports
- `GET /api/reports/export.xlsx` - Xuất báo cáo Excel
- `GET /api/reports/export.pdf` - Xuất báo cáo PDF

### Health Check
- `GET /health` - Kiểm tra trạng thái hệ thống

## Bảo mật

- Rate limiting cho tất cả API endpoints
- Helmet cho HTTP headers bảo mật
- CORS configuration
- Input validation với Joi
- Password hashing với bcrypt
- JWT authentication

## Deployment

### Render
1. Push code lên GitHub
2. Connect repository với Render
3. Set environment variables
4. Deploy

### Local Production
```bash
NODE_ENV=production npm start
```