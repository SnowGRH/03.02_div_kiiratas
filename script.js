window.addEventListener("load", init);

function init() {
  const list = [
    { szemszin: "barna", kor: 20, tesok: 2, nev: "Peti", mondat: "A kedd!" },
    {
      szemszin: "barna",
      kor: 23,
      tesok: 2,
      nev: "Gergo",
      mondat: "A kedd masodszor!",
    },
    {
      szemszin: "barna",
      kor: 20,
      tesok: 2,
      nev: "Niki",
      mondat: "Délelőtt kint játszottam a kutyussal",
    },
    {
      szemszin: "kék",
      kor: 20,
      tesok: 2,
      nev: "Asztrik",
      mondat: "Kedden, mert ott nem történt semmi.",
    },
    {
      szemszin: "barna",
      kor: 20,
      tesok: 3,
      nev: "GergőT",
      mondat: "Kedd a legjóbb nap.",
    },
    {
      szemszin: "barna",
      kor: 20,
      tesok: 2,
      nev: "Sanyi",
      mondat: "Tegnap sikerült időben megoldani a java feladatot.",
    },
    {
      szemszin: "zöld",
      kor: 20,
      tesok: 2,
      nev: "Márton",
      mondat: "Nem volt angol hétfőn",
    },
    {
      szemszin: "barna",
      kor: 20,
      tesok: 2,
      nev: "Dominik",
      mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.",
    },
    {
      szemszin: "barna",
      kor: 21,
      tesok: 2,
      nev: "Marci",
      mondat: "Ha gyenge vagy akkor legalább ne sírj",
    },
    {
      szemszin: "kék",
      kor: 20,
      tesok: 4,
      nev: "Bence",
      mondat: "Pillanat türelmet kérek javítom a mikrofont.",
    },
  ];
  const ART = document.querySelector("article");
  megjelenit(list);
  megjelenit2(list, ART);
  eletkorAtlag(list);

  /* JavaScript objektum*/
  const obj1 = {
    nev: "peti",
    mondat: "A kedd!",
    szemszin: "kek",
    kor: 23,
  };
  const obj2 = {
    nev: "Gergo",
    mondat: "A kedd masodszor!",
    szemszin: "Kek/Zold",
    kor: 23,
  };

  /* Asszociacios */
}
function megjelenit2(list, ART) {
  let htmlkod = "";
  htmlkod += `<table>
    <thead>
        <th></th>
        <td></td>
      </thead>
      <tbody>
    `;
  for (let i = 0; i < list.length; i++) {
    htmlkod += `
      <tr>
        <th>${list[i].nev}</th>
        <td>${list[i].mondat}</td>
      </tr>
      `;
    htmlkod += `<td><button>Torles</button></td>`;
  }

  htmlkod += ` </tbody>
    </table>`;
  ART.innerHTML += htmlkod;
  /*gombok*/
  const gombElem = document.querySelector("table button");
  console.log(gombElem);
  for (let index = 0; index < gombElem.length; index++) {
    gombElem[index].addEventListener("click", torles);
  }
}
function torles() {
  console.log(this);
}
function megjelenit(list) {
  const body = document.querySelector("body");
  for (let i = 0; i < list.length; i++) {
    const div = document.createElement("div");
    const cim = document.createElement("h2");
    const tag = document.createElement("p");
    const cimek = document.createTextNode(list[i].nev);
    const text = document.createTextNode(list[i].mondat);
    tag.appendChild(text);
    cim.appendChild(cimek);
    div.appendChild(tag);
    div.appendChild(cim);
    body.appendChild(div);
  }
}
function eletkorAtlag(list) {
  let osszeg = 0;
  for (let i = 0; i < list.length; i++) {
    osszeg += list[i].kor;
  }
  console.log(osszeg / list.length);
}
