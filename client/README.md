# mini project - Checklist Manager

/login

/test
/test/checklist
/test/testresult

auth / authentication

- login

CLICK LOGIN

- call API login
- Success --> redirect to index page
- Failure --> redirect to error page

LOGIN
LOGOUT

authSaga

LOOP

- if logged in, watch LOGOUT
- else watch LOGIN

LOGIN

- call login API to get token + user info
- set token to local storage
- redirect to index

LOGOUT

- call clear local storage
- redirect to login page
