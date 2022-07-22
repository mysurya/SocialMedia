//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotofication = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');

//FONT SIZE
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');

//BACKGROUND
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


//--------------------------------------SIDEBAR----------------------------
//remove action class all menu item 

function changeActiveItem() {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notification') {
            document.querySelector('.notification-popup').style.display = 'none';
            
        }else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display = 'none';
        }
    })
})


//--------------------------------------MESSAGES----------------------------

//SEARCHES CHATS
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
   //console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}
//SEARCH CHAT
messageSearch.addEventListener('keyup', searchMessage);


//HIIGHLIGHT MESSAGFEE CARD WHEN MESSAGE CARD CLICKED
messagesNotofication.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotofication.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';       
    },2000);
})



//---------THEME/DISPLAY CUSTOMIZATION---------------------------

//OPEN MODEL

const openThemeModel = () => {
    themeModel.style.display = 'grid';
}

//CLOSES MODEL
const closeThemeModel = (e) => {
   if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none';
    }
}
theme.addEventListener('click', openThemeModel);
themeModel.addEventListener('click', closeThemeModel);


//-------------------------FONTS-----------------------------

//REMOVE ACTIVE CLASS SIZE SELECTOR

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {   
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-18rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        //CHANGE FONT SIZE OF ROOT HTML ELEMENT
        document.querySelector('html').style.fontSize = fontSize;
    })
    

})

//CHANGE PRIMARY COLORS---------

//REMOVE ACTIVE COLOR

const changeActiveColor = () => {
    colorPallete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        changeActiveColor();
        let primary;
        color.classList.toggle('active');
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


//THEME BACKGROUND VALUE

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}



bg1.addEventListener('click', () => {
    
    //ADD ACTIVE CLASS
    bg1.classList.add('active');
    //REMOVE ACTIVE CLASS
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();
})
bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');
    //REMOVE ACTIVE CLASS
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    bg3.classList.add('active');
   //REMOVE ACTIVE CLASS
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})

