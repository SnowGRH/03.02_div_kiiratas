window.addEventListener("load", init);

function init() {
  const list = [
    { nev: "Peti", mondat: "A kedd!" },
    {
      nev: "Gergo",
      mondat: "A kedd masodszor!",
      szemszin: "Kek/Zold",
      kor: 23,
    },
    { nev: "Niki", mondat: "Délelőtt kint játszottam a kutyussal" },
    { nev: "Asztrik", mondat: "Kedden, mert ott nem történt semmi." },
    { nev: "GergőT", mondat: "Kedd a legjóbb nap." },
    {
      név: "Sanyi",
      mondat: "Tegnap sikerült időben megoldani a java feladatot.",
    },
    { nev: "Márton", mondat: "Nem volt angol hétfőn" },
    {
      nev: "Dominik",
      mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.",
    },
    { nev: "Marci", mondat: "Ha gyenge vagy akkor legalább ne sírj" },
    { nev: "Bence", mondat: "Pillanat türelmet kérek javítom a mikrofont." },
  ];
  megjelenit(list);

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

function megjelenit(list) {
    const body = document.querySelector("body");
    console.log(list)
  for (let i = 0; i < list.lenght; i++) {
    const div = document.createElement("div");
    const cim = document.createElement("h2");
    const tag = document.createElement("p");
    const cimek = document.createTextNode(list[i].nev);
    const text = document.createTextNode(list[i].mondat);
    tag.appendChild(text);
    cim.appendChild(cimek);
    div.appendChild(tag);
    div.appendChild(cim);s
    body.appendChild(div);
  }
}