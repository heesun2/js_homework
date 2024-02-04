


/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/




//querySelector => html을 잡아서 javascript에 끌어 놓는것
//이걸로 input을 잡을것이다
//일치 유무를 찾아야 하기 때문에 input을 잡아야함

const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

const idField = document.querySelector("#userEmail");
const pwField = document.querySelector("#userPassword");
const submit = document.querySelector(".btn-login");



//eventListener

let itemsid = false;
let itemspw = false;


function handleCheckId(){
  console.log(this.value); //handleCheckId를 호출한 idField ( 따라서 this 가 해당 Input )
    // this.value를 하면 사용자가 작성한 문자를 그대로 console에 추력하고 수집하게 된다


    let a = emailReg(this.value);
    itemsid = a;
    console.log(a);

    if(this.value  === user.id ){ //만약 작성된'hello'와 같은 문장이 입력된다면
        console.log('success'); // 이렇게반환하고
        idField.classList.remove('is--invalid'); // 문자를 정확히 입력 했을 때 하단의 is-active를 삭제하는 코드 
     } else{ //만약 아니라면
        console.log('error!');
        idField.classList.add('is--invalid');
    }

    if( a === true){
      idField.classList.remove('is--invalid');
    } else if(this.value === ''){
      idField.classList.remove('is--invalid');
    }else{
      idField.classList.add('is--invalid');
    }

}





function handleSignUp(){
  console.log(this.value); //handleCheckId를 호출한 idField ( 따라서 this 가 해당 Input )
    // this.value를 하면 사용자가 작성한 문자를 그대로 console에 추력하고 수집하게 된다


    let b = pwReg(this.value);
    console.log(b);
    itemspw = b;


    // let pwValue = this.value;
    // console.log(pwValue);

    if(this.value  === user.pw){ //만약 작성된'hello'와 같은 문장이 입력된다면
        console.log('success'); // 이렇게반환하고
        pwField.classList.remove('is--invalid'); // 문자를 정확히 입력 했을 때 하단의 is-active를 삭제하는 코드 


     } else{ //만약 아니라면
        console.log('error!');
        pwField.classList.add('is--invalid');
        
    }


    if( b === true){
      pwField.classList.remove('is--invalid');
    } else if(this.value === ''){
      pwField.classList.remove('is--invalid');
    }else{
      pwField.classList.add('is--invalid');
    }
}


let b = pwReg(this.value);
console.log('b : ' ,b);



function handleSubmit(event){ //event 객체를 떨궈주는 역할인 e 
    
  event.preventDefault(); // 객체를 떨궈주는 역할인 e의 preventDefault 기능을 사용하겠다
  
    if(itemsid && itemspw){
      console.log('참');
      window.location.href = 'welcome.html';
    } else {
      console.log('다시');
    }




    console.log('제출!');
}


// submit.addEventListener('click', function() {


//   // 새로운 페이지의 URL로 이동

//   // 또는 window.location.replace('새로운페이지.html'); 를 사용할 수도 있습니다.
// });




idField.addEventListener('input', handleCheckId)
pwField.addEventListener('input', handleSignUp) //해당 input에 호출이 일어나면 계속해서 변화 해 주는 input
submit.addEventListener('click', handleSubmit)



//classlist





function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



// 로그인 버튼을 누르면 user.id 와 input 값을 비교하여 true 와 false값을 내고 변수에 담는다.






// function buttonClick(){
//   if( idValue === user.id ){
//     console.log(true);
//   }else{
//     console.log(false);
//   }

//   if ( pwValue === user.pw ){
//     console.log(true);
//   }else{
//     console.log(false);
//   }

  
  
// }


// 로그인 버튼을 누르면 user.pw 와 input 값을 비교하여 true 와 false값을 내고 변수에 담는다.


// 이 두개의 변수 모두 true 라면 welcome 페이지로 이동하고 아니라면 console에 error










