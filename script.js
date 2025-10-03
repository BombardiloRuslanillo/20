let body = document.querySelector('body');
let name = prompt('Ismingizni kiriting');
body.classList.add('bg-primary-900', 'flex', 'justify-center', 'items-center', 'h-screen');
let hh = document.createElement('h1');
hh.classList.add('text-yellow-900', 'text-[60px]', 'font-bold');
hh.innerHTML = name;
body.append(hh);
       
