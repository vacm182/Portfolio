// Textos de la interfaz en ES / EN / FR.
var T = {
  role:      {es:"Diseño industrial · Ingeniería de empaque", en:"Industrial design · Packaging engineering", fr:"Design industriel · Ingénierie d'emballage"},
  bio:       {es:"Ingeniero de empaque (Packaging Engineer) con base en París — 9 años desarrollando packaging PET/rPET para bebidas en Envases Universales, con raíces en diseño industrial de producto que incluyen hardware electrónico, punto de venta y diseño de eventos.",
              en:"Packaging Engineer based in Paris — 9 years developing PET/rPET beverage packaging at Envases Universales, with roots in industrial product design spanning electronic hardware, point-of-sale displays and event design.",
              fr:"Ingénieur emballage basé à Paris — 9 ans de développement d'emballages PET/rPET pour boissons chez Envases Universales, avec une formation en design industriel couvrant le hardware électronique, la PLV et le design d'événements."},
  all:       {es:"todo", en:"all", fr:"tout"},
  hardware:  {es:"hardware", en:"hardware", fr:"hardware"},
  escolares: {es:"escolares", en:"academic", fr:"académique"},
  pos:       {es:"punto de venta", en:"point of sale", fr:"PLV"},
  eventos:   {es:"eventos", en:"events", fr:"événements"},
  packaging: {es:"packaging", en:"packaging", fr:"emballage"},
  ux:        {es:"ux / digital", en:"ux / digital", fr:"ux / digital"},
  pending:   {es:"imagen pendiente", en:"image coming soon", fr:"image à venir"},
  footer:    {es:"Vic — diseño industrial", en:"Vic — industrial design", fr:"Vic — design industriel"},
  back:      {es:"← volver al portafolio", en:"← back to portfolio", fr:"← retour au portfolio"},
  challenge: {es:"Reto", en:"Challenge", fr:"Défi"},
  process:   {es:"Proceso", en:"Process", fr:"Démarche"},
  result:    {es:"Resultado", en:"Result", fr:"Résultat"},
  role_lbl:  {es:"Rol", en:"Role", fr:"Rôle"},
  role_val:  {es:"Diseño e ingeniería de producto PET · Envases Universales", en:"PET product design & engineering · Envases Universales", fr:"Design et ingénierie produit PET · Envases Universales"},
  client:    {es:"Cliente", en:"Client", fr:"Client"},
  prev:      {es:"← anterior", en:"← previous", fr:"← précédent"},
  next:      {es:"siguiente →", en:"next →", fr:"suivant →"},
  see:       {es:"ver caso →", en:"view case →", fr:"voir le projet →"},

  // títulos de tarjetas
  "t-tray":      {es:"Charola eBeam", en:"eBeam tray", fr:"Plateau eBeam"},
  "t-office":    {es:"eBeam en oficina", en:"eBeam in the office", fr:"eBeam au bureau"},
  "t-capture":   {es:"Barra de captura", en:"Capture bar", fr:"Barre de capture"},
  "t-projector": {es:"Proyector de tiro corto", en:"Short-throw projector", fr:"Projecteur à courte focale"},
  "t-dome":      {es:"Domo sensor", en:"Sensor dome", fr:"Dôme capteur"},
  "t-dell":      {es:"Rack de carga — Dell", en:"Charging rack — Dell", fr:"Rack de charge — Dell"},
  "t-hw1":       {es:"Hot Wheels RC — Mesa 2 en 1", en:"Hot Wheels RC — 2-in-1 table", fr:"Hot Wheels RC — table 2 en 1"},
  "t-hw2":       {es:"Hot Wheels Reto", en:"Hot Wheels Challenge", fr:"Hot Wheels Défi"},
  "t-off":       {es:"OFF! — torre giratoria", en:"OFF! — rotating tower", fr:"OFF! — tour rotative"},
  "t-gatorade":  {es:"Gatorade — isla refrigerada", en:"Gatorade — refrigerated island", fr:"Gatorade — îlot réfrigéré"},
  "t-pepsi":     {es:"Pepsi — isla refrigerada", en:"Pepsi — refrigerated island", fr:"Pepsi — îlot réfrigéré"},
  "t-eternelle": {es:"Eternelle — mostrador", en:"Eternelle — counter display", fr:"Eternelle — présentoir comptoir"},
  "t-barbie1":   {es:"Barbie — mural de temporada", en:"Barbie — seasonal mural", fr:"Barbie — fresque saisonnière"},
  "t-max":       {es:"Max Steel — exhibidor", en:"Max Steel — display", fr:"Max Steel — présentoir"},
  "t-pes":       {es:"PES 2013 — estela promocional", en:"PES 2013 — promotional totem", fr:"PES 2013 — totem promotionnel"},
  "t-disp":      {es:"Dispensador de producto", en:"Product dispenser", fr:"Distributeur de produit"},
  "t-tablet":    {es:"Portador con pantalla", en:"Screen holder display", fr:"Support avec écran"},
  "t-impulso":   {es:"Tira de impulso", en:"Impulse strip", fr:"Bande d'achat d'impulsion"},
  "t-facade":    {es:"Rotulación de fachada", en:"Storefront signage", fr:"Signalétique de façade"},
  "t-ebeamstand":{es:"eBeam — stand de feria", en:"eBeam — trade show booth", fr:"eBeam — stand de salon"},
  "t-stand":     {es:"Stand publicitario", en:"Promotional booth", fr:"Stand promotionnel"},
  "t-french":    {es:"App para aprender francés", en:"French learning app", fr:"App pour apprendre le français"},
  "d-me310":     {es:"Design Thinking Innovation Program, en colaboración con Stanford. 2009–2010.", en:"Design Thinking Innovation Program, in collaboration with Stanford. 2009–2010.", fr:"Programme d'innovation en Design Thinking, en collaboration avec Stanford. 2009–2010."}
};

function getLang(){
  var q = new URLSearchParams(location.search).get('lang');
  if (q && /^(es|en|fr)$/.test(q)) return q;
  try { var s = localStorage.getItem('lang'); if (s) return s; } catch(e){}
  var n = (navigator.language || 'es').slice(0,2);
  return /^(es|en|fr)$/.test(n) ? n : 'en';
}
function setLang(l){
  try { localStorage.setItem('lang', l); } catch(e){}
  document.documentElement.lang = l;
  document.querySelectorAll('[data-t]').forEach(function(el){
    var k = el.getAttribute('data-t'); if (T[k]) el.textContent = T[k][l];
  });
  document.querySelectorAll('.lang button').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-lang') === l);
  });
  if (window.onLang) window.onLang(l);
}
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.lang button').forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.getAttribute('data-lang')); });
  });
  setLang(getLang());
});
