import { NextRequest, NextResponse } from 'next/server';
// import {getToken} from './app/admin/api/auth'

export function middleware(request: NextRequest) {
  // Отримуємо токен з куків
      const token = request.cookies.get('token');
    // const token = getToken();
    // console.log('token in middleware', token)

  // Перевіряємо, чи присутній токен
  if (!token) {
    // Якщо токен відсутній, перенаправляємо користувача на сторінку логіну
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Якщо токен присутній, дозволяємо доступ до запитуваної сторінки
  return NextResponse.next();
}

// Вказуємо, на які маршрути повинна застосовуватися middleware
export const config = {
  matcher: ['/admin/forms'], // Замініть '/private/:path*' на ваші приватні маршрути
};
