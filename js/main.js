/** 사용자 ID, PW  */
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

const idField = document.querySelector("#userEmail");
const pwField = document.querySelector("#userPassword");
const submit = document.querySelector(".btn-login");


/** PW와 ID의 기본값을 false로 선언 하여 로그인이 넘어가지 않도록 만든다 */

let itemsid = false;
let itemspw = false;


function handleCheckId(){
  console.log(this.value); 

    /** 사용자가 입력한 id값을 변수 a로 전달하고 a는 itemsid로 전달 */
    let a = emailReg(this.value);
    itemsid = a;
    console.log(a);

/** if문을 사용하여 user.id 값과 사용자가 입력한 값을 비교하여 false라면 에러를 안내한다 */
    if(this.value  === user.id ){
        console.log('success'); 
        idField.classList.remove('is--invalid'); 
    } else{
        console.log('error!');
        idField.classList.add('is--invalid');
    }

/** if문을 사용하여 사용자가 입력한 id값 변수 a가 true이거나 공백이면 안내된 에러를 삭제한다 */
    if( a === true){
      idField.classList.remove('is--invalid');
    } else if(this.value === ''){
      idField.classList.remove('is--invalid');
    }else{
      idField.classList.add('is--invalid');
    }
}


function handleSignUp(){
  console.log(this.value); 

      /** 사용자가 입력한 pw값을 변수 b로 전달하고 b는 itemspw로 전달*/
    let b = pwReg(this.value);
    console.log(b);
    itemspw = b;

    /** if문을 사용하여 user.pw 값과 사용자가 입력한 값을 비교하여 false라면 에러를 안내한다 */
    if(this.value  === user.pw){ 
        console.log('success');
        pwField.classList.remove('is--invalid');

    } else{ 
        console.log('error!');
        pwField.classList.add('is--invalid');
        
    }

/** if문을 사용하여 사용자가 입력한 pw값 변수 b가 true이거나 공백이면 안내된 에러를 삭제한다 */
    if( b === true){
      pwField.classList.remove('is--invalid');
    } else if(this.value === ''){
      pwField.classList.remove('is--invalid');
    }else{
      pwField.classList.add('is--invalid');
    }
}


function handleSubmit(event){ //event 객체를 떨궈주는 역할인 e 
  event.preventDefault(); // 객체를 떨궈주는 역할인 e의 preventDefault 기능을 사용
  
  /**만약 사용자가 입력한 id값과 pw값이 모두 true를 반환 한다면 'welcome.html' 페이지로 이동한다 */
    if(itemsid && itemspw ){
      console.log('참');
      window.location.href = 'welcome.html';
    }
    
    /**둘중 하나라도 false값이 있다면 화면에 안내 메세지를 띄운다 */
    else {
      alert('아이디와 비밀번호를 확인 해 주세요');
    }

    console.log('제출!');
}


idField.addEventListener('input', handleCheckId)
pwField.addEventListener('input', handleSignUp) 
submit.addEventListener('click', handleSubmit)


function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
