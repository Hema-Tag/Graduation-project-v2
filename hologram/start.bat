@echo off
title Hand Tracking System
color 0A

echo ========================================
echo   نظام تتبع اليد - Hand Tracking
echo ========================================
echo.

:: انتقل إلى مجلد المشروع (عدل المسار ده حسب جهازك)
cd /d "D:\تجربة واحد\تجربة 2"

:: تأكد أن الملفات موجودة
if not exist "hand_server.py" (
    echo خطأ: hand_server.py غير موجود في هذا المجلد
    pause
    exit /b
)

if not exist "slider.html" (
    echo خطأ: slider.html غير موجود
    pause
    exit /b
)

echo [1/3] جاري تشغيل خادم اليد...
start "Hand Server" cmd /k python hand_server.py

timeout /t 3 /nobreak > nul

echo [2/3] جاري تشغيل خادم HTTP...
start "HTTP Server" cmd /k python -m http.server 8080

timeout /t 2 /nobreak > nul

echo [3/3] جاري فتح المتصفح...
start http://localhost:8080/slider.html

echo.
echo ========================================
echo   النظام يعمل الآن بنجاح!
echo   - حرك يدك أمام الكاميرا
echo   - اضغط Enter لإغلاق كل شيء
echo ========================================

pause > nul

:: إغلاق كل شيء
echo جاري الإغلاق...
taskkill /f /im python.exe > nul 2>&1
exit