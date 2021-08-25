let ab = 0;
function iconsfn() {
  ab += .5;
  if (!Number.isInteger(ab)) {
    let links = document.getElementById('links');
    links.style["transition"] = '1s';
    links.style["transition-property"] = 'margin-top';
    links.style["margin-top"] = '0px';
  }
  else {
    let links = document.getElementById('links');
  links.style["transition"] = '1s';
  links.style["transition-property"] = 'margin-top';
  links.style["margin-top"] = '-210px';

  }
}


function styleFn(us, ...grades) {
  document.getElementById('es').innerHTML =`${grades[0]}`;
  document.getElementById('ar').innerHTML =`${grades[1]}`;
  document.getElementById('math').innerHTML =`${grades[2]}`;
  document.getElementById('en').innerHTML =`${grades[3]}`;
  document.getElementById('ph').innerHTML =`${grades[4]}`;
  document.getElementById('km').innerHTML =`${grades[5]}`;
  document.getElementById('eqt').innerHTML =`${grades[6]}`;
  document.getElementById('ejt').innerHTML= `${grades[7]}`
  
}
function level() {

let level = document.getElementById("educationalLevel").value;
let bClass = document.getElementById("scientificClass").value;
let sbranch = document.getElementById("secondaryBranch").value;


if (level === 'الرابع الاعدادي' || level.endsWith('متوسط')) {
  document.getElementById('secondaryBranch').style["display"] = 'none';
}
else {
  document.getElementById('secondaryBranch').style["display"] = 'block';
  }
  
if (level === 'الخامس الاعدادي' && sbranch === 'الفرع التطبيقي') {
  document.getElementById('eqtsad').innerHTML =`علم الارض`;
}
if (level === 'السادس الاعدادي' && sbranch === 'الفرع التطبيقي') {
  document.getElementById('eqtsad').innerHTML = `اقتصاد`;
}

if (level.endsWith('الاعدادي')) {
  document.getElementById('ejtma').style['display'] = 'none';
}

}

function serch() {
let studentsNames  = userName.value.toLowerCase();
let level = document.getElementById("educationalLevel").value;
let gend = document.getElementById("gend").value;
let bClass = document.getElementById("scientificClass").value;
let sbranch = document.getElementById("secondaryBranch").value;

if (gend === 'ذكر') {
  
if (level === 'الاول متوسط') {
   if (bClass === 'ألف') {
    
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {
   }
   if (bClass === 'دال') {
     
   }
}
if (level === 'الثاني متوسط') {
   if (bClass === 'ألف') {
      
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {
   }
   if (bClass === 'دال') {
     
   }
}
if (level === 'الثالث متوسط') {
   if (bClass === 'ألف') {
      
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {
   }
   if (bClass === 'دال') {
     
   }
}

if (level === 'الرابع الاعدادي') {
   if (bClass === 'ألف') {
      
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {
   }
   if (bClass === 'دال') {
     
   }
} 
if (level === 'الخامس الاعدادي') {
  if (sbranch === 'الفرع الاحيائي') {
   if (bClass === 'ألف') {
        
   }
   if (bClass === 'باء') {
    
   }
   if (bClass === 'جيم') {
  
   }
   if (bClass === 'دال') {
  
   }
  
  }
  if (sbranch === 'الفرع التطبيقي') {
   if (bClass === 'ألف') {
  
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {
  
   }
   if (bClass === 'دال') {
  
   }
  }
}
if (level === 'السادس الاعدادي') {
 if (sbranch === 'الفرع الاحيائي') {
   if (bClass === 'ألف') {
  
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {

   }
   if (bClass === 'دال') {
  
   }
  
  }
  
  if (sbranch === 'الفرع التطبيقي') {
   if (bClass === 'ألف') {
  
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {
      switch (studentsNames.trim()) {
        case 'محمد حسين علي':
          styleFn(userName.value, 98, 90, 89, 88, 95, 90, 99, '---')
          break;
        default:
          document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته "${userName.value}" غير موجود يرجى التأكد من صحة الاسم`
      }
   }
   if (bClass === 'دال') {
  
   }
  }
  
}
}
if (gend === 'انثى') {
  
if (level === 'الاول متوسط') {
   if (bClass === 'ألف') {
      
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {
   }
   if (bClass === 'دال') {
     
   }
}
if (level === 'الثاني متوسط') {
   if (bClass === 'ألف') {
      
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {
   }
   if (bClass === 'دال') {
     
   }
}
if (level === 'الثالث متوسط') {
   if (bClass === 'ألف') {
      
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {
   }
   if (bClass === 'دال') {
     
   }
}

if (level === 'الرابع الاعدادي') {
   if (bClass === 'ألف') {
      
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {
   }
   if (bClass === 'دال') {
     
   }
} 
if (level === 'الخامس الاعدادي') {
  if (sbranch === 'الفرع الاحيائي') {
   if (bClass === 'ألف') {
        
   }
   if (bClass === 'باء') {
    
   }
   if (bClass === 'جيم') {
  
   }
   if (bClass === 'دال') {
  
   }
  
  }
  if (sbranch === 'الفرع التطبيقي') {
   if (bClass === 'ألف') {
  
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {
  
   }
   if (bClass === 'دال') {
  
   }
  }
}
if (level === 'السادس الاعدادي') {
 if (sbranch === 'الفرع الاحيائي') {
   if (bClass === 'ألف') {
  
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {

   }
   if (bClass === 'دال') {
  
   }
  
  }
  
  if (sbranch === 'الفرع التطبيقي') {
   if (bClass === 'ألف') {
  
   }
   if (bClass === 'باء') {
  
   }
   if (bClass === 'جيم') {
     
   }
   if (bClass === 'دال') {
  
   }
  }
  
}
}
}







//الاعدادية

/*switch (studentsNames.trim()) {
  case '':
    styleFn(userName.value, 98, 90, 89, 88, 95, 90, 99, '---')
    break;
  default:
    document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
}*/

//المتوسطة 
/*
switch (studentsNames.trim()) {
  case '':
    styleFn(userName.value, 98, 90, 89, 88, 95, 90, 99, 10)
    break;
  default:
    document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
}
*/