셔틀 예약 시스템 - README
이 프로젝트는 셔틀 예약 및 사용자 관리 시스템을 구축한 Node.js 애플리케이션입니다. 사용자는 셔틀 시간을 확인하고, 예약 및 취소할 수 있으며, 관리자는 매일 자정에 예약 기록과 인원 정보를 초기화하는 작업을 자동으로 수행할 수 있습니다. 이 문서에서는 각 기능에 대한 설명과 사용 방법을 자세히 안내합니다.

목차
기술 스택
환경 설정
데이터베이스 모델
API 엔드포인트
사용자 관리
예약 관리
크론 작업
Nodemailer 설정
JWT 인증
예상 응답
기술 스택
Node.js
Express
Sequelize (MySQL ORM)
bcrypt (비밀번호 암호화)
JWT (JSON Web Token)
Nodemailer (이메일 전송)
Cron (정기 작업 스케줄러)
환경 설정
이 프로젝트를 실행하기 전에 .env 파일을 설정해야 합니다. 다음은 필수 환경 변수 목록입니다.

makefile
코드 복사
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
이 프로젝트는 MySQL 데이터베이스와 연동되므로, MySQL 서버 및 해당 데이터베이스 설정이 필요합니다.

데이터베이스 모델
Users 테이블
사용자 정보를 저장하는 테이블입니다.

id: 사용자 고유 ID
name: 사용자 이름
role: 사용자 역할 (학생 또는 기사)
student_id: 학생 ID (기사의 경우 null)
email: 이메일 주소
phone_number: 전화번호
bus_number: 버스 번호 (학생의 경우 null)
password: 암호화된 비밀번호
verified: 이메일 인증 여부
credits: 예약 가능한 횟수 (기본값 0)
course: 코스 정보 (기사에게만 해당)
Times 테이블
각 셔틀 시간별 예약 인원을 저장하는 테이블입니다.

time: 셔틀 시간
people: 해당 시간에 예약한 사람 수
TimesOne, TimesTwo, TimesThree, TimesFour
각기 다른 코스를 위한 셔틀 시간을 관리하는 테이블입니다.

Reservations 테이블
예약 정보를 저장하는 테이블입니다.

id: 예약 고유 ID
student_id: 예약한 학생의 ID
reservation_time: 예약한 셔틀 시간
created_at: 예약 생성 시간
cancelled: 예약 취소 여부
course: 예약한 코스
API 엔드포인트
사용자 관리
1. 회원가입을 위한 이메일 인증 요청
POST /send-verification-code
사용자가 회원가입 시 이메일로 인증번호를 요청하는 API입니다.
요청 예시:
json
코드 복사
{
  "email": "user@example.com"
}
2. 회원가입 (학생)
POST /verify-code
인증번호 확인 후 회원가입을 완료하는 API입니다.
요청 예시:
json
코드 복사
{
  "name": "홍길동",
  "studentId": "123456",
  "phone": "01012345678",
  "email": "user@example.com",
  "code": "123456",
  "password": "yourpassword"
}
3. 기사 회원가입
POST /register-driver
기사를 위한 회원가입 API입니다.
요청 예시:
json
코드 복사
{
  "name": "홍길동",
  "phone": "01012345678",
  "bus_number": "1",
  "password": "yourpassword",
  "course": "course_name"
}
4. 로그인
POST /login
학번 또는 전화번호와 비밀번호를 사용하여 로그인하는 API입니다.
요청 예시:
json
코드 복사
{
  "studentIdOrPhone": "123456",
  "password": "yourpassword"
}
예약 관리
1. 셔틀 시간 확인
GET /times
각 코스의 셔틀 시간을 확인하는 API입니다.
2. 특정 코스의 셔틀 시간 확인
GET /times/:course
특정 코스의 셔틀 시간과 예약 인원을 확인하는 API입니다.
요청 예시: /times/timesone
3. 예약 생성
POST /reserve
인증된 사용자가 셔틀 예약을 생성하는 API입니다.
요청 예시:
json
코드 복사
{
  "time": "08:00",
  "course": "timesone"
}
4. 예약 취소
POST /cancel-reservation
사용자가 자신의 예약을 취소하는 API입니다.
요청 예시:
json
코드 복사
{
  "reservationId": 1
}
크론 작업
매일 자정: 예약 테이블을 초기화하고, 모든 사용자의 예약 가능 횟수(credits)와 각 셔틀 시간의 예약 인원을 초기화하는 작업이 수행됩니다.
Nodemailer 설정
Nodemailer는 회원가입 시 이메일로 인증번호를 전송하는 데 사용됩니다. .env 파일에서 이메일 계정과 비밀번호를 설정하여 사용해야 합니다.

env
코드 복사
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
JWT 인증
JWT는 사용자 인증 및 권한 관리를 위해 사용됩니다. 사용자는 로그인 시 토큰을 발급받으며, 예약 관련 API 호출 시 이 토큰을 사용해야 합니다.

예상 응답
회원가입 성공
json
코드 복사
{
  "message": "이메일 인증 완료! 회원가입 완료."
}
로그인 성공
json
코드 복사
{
  "message": "로그인 성공",
  "token": "your_jwt_token",
  "role": "student"
}
예약 성공
json
코드 복사
{
  "message": "예약이 완료되었습니다.",
  "time": "08:00",
  "people": 3
}
이 프로젝트를 실행하면 셔틀 예약 시스템을 통해 사용자는 셔틀 시간을 확인하고, 예약을 관리하며, 관리자는 매일 자정에 예약 기록을 초기화하는 작업을 자동화할 수 있습니다.
