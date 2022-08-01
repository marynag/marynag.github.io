console.log('+')

const btn=document.getElementById('btn')
const result=document.querySelector(".result")



const obj={    
    "перший заступник начальника ГУНП": "Полковник поліції",   
    "заступник начальника ГУНП": "Полковник поліції",  
    "начальник управління (при штатній чисельності не менше 30 одиниць)": "Полковник поліції",
    "начальник управління (при штатній чисельності менше 30 одиниць)":"Підполковник поліції",
    "заступник начальника управління":"Підполковник поліції",
    "начальник відділу (що не входить до складу управління, при штатній чисельності не менше 10 одиниць)":"Підполковник поліції",
    "начальник відділу":"Майор поліції",
    "начальник чергової частини (на правах відділу)":"Майор поліції",
    "заступник начальника чергової частини (на правах відділу)":"Майор поліції",
    "начальник сектору":"Майор поліції",
    "помічник (радник) начальника ГУНП":"Майор поліції",
    "помічник начальника управління":"Майор поліції",
    "головний спеціаліст":"Майор поліції",
    "старший оперуповноважений в особливо важливих справах":"Майор поліції",
    "старший слідчий в особливо важливих справах":"Майор поліції",
    "старший інспектор з особливих доручень":"Майор поліції",
    "старший оперуповноважений":"Капітан поліції",
    "старший слідчий":"Капітан поліції",
    "старший інспектор":"Капітан поліції",
    "старший інженер":"Капітан поліції",
    "старший психолог":"Капітан поліції",
    "старший референт":"Капітан поліції",
    "старший юрисконсульт":"Капітан поліції",
    "оперуповноважений":"Старший лейтенант поліції",
    "слідчий":"Старший лейтенант поліції",
    "інспектор":"Старший лейтенант поліції",
    "інженер":"Старший лейтенант поліції",
    "психолог":"Старший лейтенант поліції",
    "референт":"Старший лейтенант поліції",
    "юрисконсульт":"Старший лейтенант поліції",
    "командир батальйону":"Підполковник поліції",
    "Заступник командира батальйону":"Майор поліції",
    "начальник штабу батальйону":"Майор поліції",
    "начальник відділення":"Майор поліції",
    "командир роти (для поліції особливого призначення)": "Майор поліції",
    "начальник ізолятора":"Майор поліції",
    "Помічник командира батальйону":"Капітан поліції",
    "командир роти":"Капітан поліції",
    "заступник командира роти":"Капітан поліції",
    "командир взводу (для поліції особливого призначення)":"Капітан поліції",
    "Заступник начальника центру":"Капітан поліції",
    "начальник відділення підрозділу забезпечення":"Капітан поліції",
    "начальник майстерні":"Капітан поліції",
    "заступник начальника ізолятора":"Капітан поліції",
    "Командир взводу":"Старший лейтенант поліції",
    "заступник командира взводу":"Старший лейтенант поліції"
}

const obj2={    
    "начальник управління поліції": "Полковник поліції",  
    "заступник начальника управління поліції": "Полковник поліції поліції",
    "перший заступник начальника управління поліції": "Полковник поліції поліції",
    "начальник відділу поліції (не входить до складу управління поліції при штатній чисельності не менше 180 одиниць)": "Полковник поліції поліції",
    "начальник відділу поліції": "Підполковник поліції",
    "заступник начальника відділу поліції (не входить до складу управління)": "Підполковник поліції",
    "начальник відділення поліції (за наявності у його складі слідчого підрозділу)": "Підполковник поліції",
    "начальник відділення поліції": "Майор поліції",
    "заступник начальника відділу поліції": "Майор поліції",
    "заступник начальника відділення поліції (за наявності у його складі слідчого підрозділу)": "Майор поліції",
    "начальник відділу": "Майор поліції",
    "заступник начальника відділення поліції": "Капітан поліції",
    "заступник начальника відділу": "Капітан поліції",
    "начальник сектору": "Капітан поліції",
    "начальник відділення": "Капітан поліції",
    "начальник чергової частини": "Капітан поліції",
    "заступник начальник сектору": "Капітан поліції",
    "заступник начальник відділення": "Капітан поліції",
    "заступник начальник чергової частини": "Капітан поліції",
    "старший оперуповноважений": "Капітан поліції",
    "старший слідчий": "Капітан поліції",
    "старший інспектор": "Капітан поліції",
    "старший дільничний офіцер поліції": "Капітан поліції",
    "старший інженер": "Капітан поліції",
    "старший психолог": "Капітан поліції",
    "Оперуповноважений": "Старший лейтенант поліції",
    "слідчий": "Старший лейтенант поліції",
    "інспектор": "Старший лейтенант поліції",
    "дільничний офіцер поліції": "Старший лейтенант поліції",
    "інженер": "Старший лейтенант поліції",
    "психолог": "Старший лейтенант поліції",
    "командир батальйону":"Підполковник поліції",
    "Заступник командира батальйону":"Майор поліції",
    "начальник штабу батальйону":"Майор поліції",
    "начальник відділення":"Майор поліції",
    "командир роти (для поліції особливого призначення)": "Майор поліції",
    "начальник ізолятора":"Майор поліції",
    "Помічник командира батальйону":"Капітан поліції",
    "командир роти":"Капітан поліції",
    "заступник командира роти":"Капітан поліції",
    "командир взводу (для поліції особливого призначення)":"Капітан поліції",
    "Заступник начальника центру":"Капітан поліції",
    "начальник відділення підрозділу забезпечення":"Капітан поліції",
    "начальник майстерні":"Капітан поліції",
    "заступник начальника ізолятора":"Капітан поліції",
    "Командир взводу":"Старший лейтенант поліції",
    "заступник командира взводу":"Старший лейтенант поліції",
    "Поліцейський патрульної поліції (крім підрозділу із забезпечення супроводження)":"Старший сержант поліції ",
    "поліцейський поліції особливого призначення":"Старший сержант поліції",
    "помічник слідчого":"Старший сержант поліції ",
    "помічник оперуповноваженого":"Старший сержант поліції",
    "помічник чергового":"Старший сержант поліції",
    "старший технік-криміналіст":"Старший сержант поліції",
    "технік-криміналіст":"Старший сержант поліції",
    "молодший інспектор (групи реагування)":"Старший сержант поліції",
    "Помічник командира взводу":"Сержант поліції",
    "командир відділення":"Сержант поліції",
    "старшина":"Сержант поліції",
    "поліцейський":"Сержант поліції",
    "начальник конвою":"Сержант поліції",
    "начальник складу озброєння":"Сержант поліції",
    "інструктор":"Сержант поліції",
    "cтарший технік":"Сержант поліції",
    "технік":"Сержант поліції",
    "молодший інспектор":"Сержант поліції"
}


let data1=document.getElementById('data')
for(let i=0; i<Object.keys(obj).length;i++){
    data1.innerHTML+=`<option value="${Object.keys(obj)[i]}">${Object.keys(obj)[i]}</option>`
}

let data2=document.getElementById('data2')
for(let i=0; i<Object.keys(obj2).length;i++){
    data2.innerHTML+=`<option value="${Object.keys(obj2)[i]}">${Object.keys(obj2)[i]}</option>`
    
}


btn.addEventListener('click', function(){
    result.innerHTML=''
    let data=document.getElementById('data').value    
    console.log(data)
    data=data.toLowerCase() 
    console.log(data)
        for(let i=0; i<Object.keys(obj).length;i++){
            if(Object.keys(obj)[i].toLowerCase()==data){
                console.log(Object.values(obj)[i])
                result.innerHTML+=`<p>${Object.values(obj)[i]}</p><br>`
            }
            if(Object.values(obj)[i].toLowerCase()==data){
                console.log(Object.keys(obj)[i])
                result.innerHTML+=`<p>${Object.keys(obj)[i]}</p><br>`
            }        
        }

})


const btn2=document.getElementById('btn2')
const result2=document.querySelector(".result2")

btn2.addEventListener('click', function(){
    result2.innerHTML=''
    let data=document.getElementById('data2').value        
    data=data.toLowerCase() 
        for(let i=0; i<Object.keys(obj2).length;i++){
            if(Object.keys(obj2)[i].toLowerCase()==data){
                console.log(Object.values(obj2)[i])
                result2.innerHTML+=`<p>${Object.values(obj2)[i]}</p><br>`
            }
            if(Object.values(obj2)[i].toLowerCase()==data){
                console.log(Object.keys(obj2)[i])
                result2.innerHTML+=`<p>${Object.keys(obj2)[i]}</p><br>`
            }    
        }        
})


$( '.additinal_btn').hover(    
    function() {
      document.querySelector('.add_info').classList.remove('none')
    },
    function() {
        document.querySelector('.add_info').classList.add('none')
      }
  );




