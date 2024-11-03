# Hệ Thống Đặt Lịch Hẹn Nha Khoa

## Mục Lục
- [Giới Thiệu](#giới-thiệu)
- [Cài Đặt](#cài-đặt)
- [Hướng Dẫn Tạo Tệp .env](#hướng-dẫn-tạo-tệp-env)
- [Sử Dụng](#sử-dụng)
- [Lưu Ý Bảo Mật](#lưu-ý-bảo-mật)

## Giới Thiệu
Hệ Thống Đặt Lịch Hẹn Nha Khoa là một ứng dụng web được thiết kế để hỗ trợ quản lý các cuộc hẹn tại phòng khám nha khoa. Ứng dụng cho phép bệnh nhân đặt lịch hẹn mới, chỉnh sửa hoặc hủy lịch hẹn, và cung cấp công cụ cho nhân viên để quản lý lịch trình hiệu quả.

## Hướng Dẫn Tạo Tệp .env

Để cấu hình ứng dụng, bạn cần tạo tệp `.env` chứa các biến môi trường. Làm theo các bước sau để tạo tệp `.env` từ tệp mẫu `.env.example`:

## Cài Đặt

**Yêu cầu môi trường: Node.js 18.20.4**

Để cài đặt và chạy dự án trên máy tính của bạn, hãy làm theo các bước sau:

1. **Clone repository:**
    ```bash
    git clone https://github.com/HTri09/Dental-Clinic-Appointment.git
    ```
2. **Điều hướng đến thư mục dự án:**
    ```bash
    cd Dental-Clinic-Appointment
    ```
3. **Cài đặt các phụ thuộc:**
    ```bash
    npm install
    ```
4. **Khởi động server phát triển:**
    ```bash
    npm start
    ```

### Bước 1: Tạo tệp .env từ tệp mẫu
Sử dụng lệnh sau trong terminal:

```bash
cp .env.example .env
