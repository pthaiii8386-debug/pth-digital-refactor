# PTH DIGITAL Enterprise Full-stack

## Chạy project

1. Mở terminal trong thư mục `backend`
2. Cài thư viện:
   - `npm install`
3. Chạy server:
   - `npm start`
4. Mở trình duyệt tại:
   - `http://localhost:3000`

## Những gì đã có trong bản này

- Backend thật bằng Express, lưu dữ liệu server-side vào file JSON bền vững
- Đăng nhập bảo mật bằng JWT trong HttpOnly cookie
- Admin nhiều trang riêng: tổng quan, dịch vụ, khách hàng, thanh toán, chat, doanh nghiệp/API
- Khách hàng mua dịch vụ theo từng bước, nạp tiền bằng QR, lịch sử, hồ sơ, live chat
- Thêm / sửa / xóa dịch vụ
- Upload ảnh dịch vụ, QR admin, avatar khách hàng (lưu vào backend data)
- Duyệt / từ chối lệnh nạp ngay trong bảng
- Phân quyền: admin / support / accountant / customer
- Xuất báo cáo Excel / PDF
- Cấu hình API ngoài + webhook + cron đồng bộ định kỳ

## Cấu trúc chính

- `backend/server.js`: backend Express + auth + reports + sync API
- `backend/data/app-db.json`: dữ liệu được lưu bền vững sau khi chạy
- `admin/`: giao diện admin
- `customer/`: giao diện khách hàng
- `assets/app.js`: logic frontend nối với backend
- `assets/styles.css`: giao diện và responsive

## Ghi chú kỹ thuật

- Dữ liệu không còn phụ thuộc localStorage như trước
- Frontend và backend chạy cùng origin để cookie auth hoạt động ổn định
- API đồng bộ dịch vụ có endpoint thử tay và cron chạy định kỳ
- Nếu muốn triển khai production, nên đổi file JSON sang PostgreSQL/MySQL, thêm HTTPS và đổi `JWT_SECRET`
