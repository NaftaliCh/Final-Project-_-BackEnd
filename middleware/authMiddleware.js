import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (token == null) {
        return res.sendStatus(401); // Unauthorized jika token tidak tersedia
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden jika token tidak valid
        }
        req.user = user; // Menyimpan data user pada request untuk penggunaan selanjutnya
        next(); // Lanjutkan ke middleware/route berikutnya
    });
}
export const checkAdmin = (req, res, next) => {
    // Contoh: Periksa apakah user memiliki role 'admin'
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
  
