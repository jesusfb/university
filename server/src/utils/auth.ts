import bcrypt from "bcryptjs";

/**
 * Hàm băm mật khẩu
 * @param password - Mật khẩu cần băm
 * @returns Promise<string> - Mật khẩu đã băm
 */
export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10; // Số lượng vòng băm, 10 là giá trị thường dùng
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

/**
 * Hàm so sánh mật khẩu
 * @param password - Mật khẩu người dùng nhập vào
 * @param hashedPassword - Mật khẩu đã băm lưu trong cơ sở dữ liệu
 * @returns Promise<boolean> - Trả về true nếu mật khẩu khớp, ngược lại là false
 */
export const comparePassword = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
};
