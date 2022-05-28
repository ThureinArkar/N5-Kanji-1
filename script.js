const display=document.querySelector("p"),
display1 = document.getElementById("text1"),
display2 = document.getElementById("text2"),
display3 = document.getElementById("text3"),
display4 = document.getElementById("text4"),
 button=document.querySelector("button"),
 copyBtn=document.querySelector("span.far"),
 copyActive=document.querySelector("span.fas");
//let chars ='あいうえお';
let chars = [
  
  {
    text1:`Mountain`,
  },
  {
    text1:`River`,
  },
  {
    text1:`Rice Field`,
  },
  {
    text1:`Sun,Day`,
  },
  {
    text1:`Moon,Month`,
  },
  {
    text1:`Fire`,
  },
  {
    text1:`Water`,
  },
  {
    text1:`Tree`,
  },
  {
    text1:`Gold,Money`,
  },
  {
    text1:`Soil,Terra`,
  },
  {
    text1:`တောင်`,
  },
  {
    text1:`မြစ်`,
  },
  {
    text1:`လယ်ကွင်း၊စပါးကွင်း`,
  },
  {
    text1:`နေ၊နေမင်း၊နေ့၊နေ့ရက်`,
  },
  {
    text1:`လ၊လမင်း၊ဇန်နဝါရီလ၊ဒီလအစရှိသဖြင့်`,
  },
  {
    text1:`မီး`,
  },
  {
    text1:`ရေ`,
  },
  {
    text1:`သစ်ပင်`,
  },
  {
    text1:`ရွှေ၊ပိုက်ဆံ`,
  },
  {
    text1:`မြေကြီး၊မြေဆီ`,
  },
];



















button.addEventListener('click', () => {
let randomPhrase=Math.floor(Math.random() * chars.length);
display.innerHTML = chars[randomPhrase].text1;
});

snowFall.snow(document.querySelector('.snow'), {
	minSize: 6,
	maxSize: 10,
	round: true,
	flakeCount: 30,
	flakeColor: 'white'
});





//  button.onclick=()=>{

// let randomPhrase=Math.floor(Math.random() * chars.length);
// display.value = chars[randomPhrase].text;
// display1.value = chars[randomPhrase].author;
// display2.value = chars[randomPhrase].text1;
// display3.value = chars[randomPhrase].text2;
// let randomPhrase1 =Math.floor(Math.random() * chars1.length);
// display1.value = chars1[randomPhrase].author;
   //
   // let i,
   // randomPassword="";
   // copyBtn.style.display = "block";
   // copyActive.style.display = "none";
   // for ( i = 0; i < 1; i++) {
   //   randomPassword = randomPassword + chars.charAt(
   //     Math.floor(Math.random() * chars.length)
   //   );
   // }

//  }
