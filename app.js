// ===================== DATA =====================
const EXERCISES = {
  Iniciante: [
    { name: "Agachamento Livre", emoji: "🦵", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=350&fit=crop", desc: "Fique em pé com os pés na largura dos ombros. Desça como se fosse sentar numa cadeira, mantendo o peito erguido e joelhos alinhados com os pés. Desça até os quadris ficarem paralelos ao chão e retorne à posição inicial.\n\n✅ Séries: 3 × 15 repetições\n⏱ Descanso: 60 segundos\n🎯 Foco: Quadríceps, glúteos e posterior" },
    { name: "Flexão de Joelho", emoji: "💪", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=350&fit=crop", desc: "Apoie as mãos e joelhos no chão com as costas retas. Desça o peito até quase tocar o chão dobrando os cotovelos a 45°. Suba de volta à posição inicial.\n\n✅ Séries: 3 × 10 repetições\n⏱ Descanso: 60 segundos\n🎯 Foco: Peitoral, tríceps e ombros" },
    { name: "Prancha Isométrica", emoji: "🏋️", img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=600&h=350&fit=crop", desc: "Apoie os antebraços no chão com cotovelos sob os ombros. Levante o corpo formando uma linha reta da cabeça aos calcanhares. Contraia o abdômen durante todo o exercício.\n\n✅ Séries: 3 × 20-30 segundos\n⏱ Descanso: 45 segundos\n🎯 Foco: Core, abdômen e estabilizadores" },
    { name: "Glúteo no Chão", emoji: "🍑", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=350&fit=crop", desc: "Deite de costas com os joelhos dobrados e pés no chão. Eleve o quadril contraindo os glúteos até o corpo formar uma linha reta dos ombros aos joelhos. Segure 2 segundos no topo.\n\n✅ Séries: 3 × 15 repetições\n⏱ Descanso: 60 segundos\n🎯 Foco: Glúteos, posterior e lombar" },
    { name: "Abdominal Crunch", emoji: "🔥", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=350&fit=crop", desc: "Deite de costas com joelhos dobrados. Coloque as mãos atrás da cabeça e eleve os ombros do chão contraindo o abdômen. Não puxe o pescoço.\n\n✅ Séries: 3 × 20 repetições\n⏱ Descanso: 45 segundos\n🎯 Foco: Abdômen reto e oblíquos" },
  ],
  Intermediário: [
    { name: "Flexão Completa", emoji: "💪", img: "https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=600&h=350&fit=crop", desc: "Apoie as mãos no chão na largura dos ombros com o corpo em linha reta. Desça o peito ao chão mantendo os cotovelos a 45° do corpo. Suba contraindo o peitoral.\n\n✅ Séries: 4 × 12 repetições\n⏱ Descanso: 60 segundos\n🎯 Foco: Peitoral, tríceps, ombros e core" },
    { name: "Afundo", emoji: "🦵", img: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=600&h=350&fit=crop", desc: "Em pé, dê um passo à frente com uma perna. Desça o joelho traseiro quase ao chão enquanto o joelho da frente forma 90°. Volte e alterne as pernas.\n\n✅ Séries: 3 × 12 por perna\n⏱ Descanso: 60 segundos\n🎯 Foco: Quadríceps, glúteos e equilíbrio" },
    { name: "Burpee", emoji: "🔥", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=350&fit=crop", desc: "Agache, apoie as mãos no chão e jogue os pés para trás. Faça uma flexão, traga os pés de volta e salte com os braços acima da cabeça. Exercício full body.\n\n✅ Séries: 3 × 10 repetições\n⏱ Descanso: 90 segundos\n🎯 Foco: Corpo todo + cardio" },
    { name: "Mountain Climber", emoji: "⛰️", img: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&h=350&fit=crop", desc: "Posição de flexão com braços estendidos. Leve um joelho ao peito rapidamente enquanto o outro fica estendido. Alterne as pernas em ritmo acelerado.\n\n✅ Séries: 4 × 30 segundos\n⏱ Descanso: 45 segundos\n🎯 Foco: Core, cardio e membros inferiores" },
    { name: "Barra Fixa Assistida", emoji: "🏅", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=350&fit=crop", desc: "Use uma caixa ou elástico para auxílio. Segure a barra com as palmas viradas para frente e puxe o corpo até o queixo ultrapassar a barra. Desça controlado.\n\n✅ Séries: 3 × 6-8 repetições\n⏱ Descanso: 90 segundos\n🎯 Foco: Dorsais, bíceps e core" },
  ],
  Avançado: [
    { name: "Flexão Diamante", emoji: "💎", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=350&fit=crop", desc: "Mãos no chão formando um triângulo/diamante com os dedos. Desça mantendo os cotovelos próximos ao corpo. Movimento exige muito do tríceps.\n\n✅ Séries: 4 × 10 repetições\n⏱ Descanso: 75 segundos\n🎯 Foco: Tríceps, peitoral interno e ombros" },
    { name: "Pistol Squat", emoji: "🎯", img: "https://images.unsplash.com/photo-1627483297886-49710ae1fc22?w=600&h=350&fit=crop", desc: "Em pé sobre uma perna, estenda a outra à frente. Agache na perna de apoio descendo o máximo possível mantendo o equilíbrio. Suba controlado.\n\n✅ Séries: 3 × 5 por perna\n⏱ Descanso: 90 segundos\n🎯 Foco: Quadríceps, glúteos e equilíbrio avançado" },
    { name: "Muscle Up", emoji: "🏅", img: "https://images.unsplash.com/photo-1598266663439-2056e6900339?w=600&h=350&fit=crop", desc: "Na barra, execute uma tração explosiva. Quando o queixo passa da barra, empurre o corpo acima até os braços estarem estendidos. Requer força e coordenação.\n\n✅ Séries: 3 × 5 repetições\n⏱ Descanso: 2 minutos\n🎯 Foco: Corpo todo, força explosiva" },
    { name: "Handstand Push-up", emoji: "🤸", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=350&fit=crop", desc: "Em posição de parada de mão contra uma parede. Dobre os cotovelos descendo a cabeça ao chão e empurre de volta. Exercício avançado para ombros.\n\n✅ Séries: 3 × 5 repetições\n⏱ Descanso: 2 minutos\n🎯 Foco: Deltoides, tríceps e core" },
    { name: "L-Sit", emoji: "💺", img: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&h=350&fit=crop", desc: "Apoie as palmas no chão com os braços estendidos. Levante o corpo e estenda as pernas paralelas ao chão formando um 'L'. Segure a posição.\n\n✅ Séries: 4 × 10-15 segundos\n⏱ Descanso: 60 segundos\n🎯 Foco: Core, quadríceps e força de compressão" },
  ],
};

const RECIPES = {
  Emagrecimento: [
    { name: "Bowl de Frango Grelhado", emoji: "🥗", cal: 380, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=350&fit=crop", ingredients: ["150g peito de frango", "1 xícara de folhas verdes mistas", "½ pepino em fatias", "1 tomate em cubos", "1 col. sopa de azeite extra virgem", "Suco de ½ limão", "Sal rosa e pimenta do reino", "Orégano e ervas finas"], prep: "1. Tempere o frango com sal, pimenta e orégano. Grelhe em frigideira antiaderente por 6 min de cada lado.\n\n2. Enquanto o frango descansa, corte o pepino e o tomate.\n\n3. Monte o bowl colocando as folhas como base.\n\n4. Adicione o frango fatiado na diagonal e os legumes.\n\n5. Regue com azeite e limão. Sirva imediatamente." },
    { name: "Sopa Detox de Legumes", emoji: "🥣", cal: 210, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=350&fit=crop", ingredients: ["1 abobrinha média", "2 cenouras", "1 talo de aipo", "1 cebola roxa", "2 dentes de alho", "1L caldo de legumes sem sal", "1 col. chá de cúrcuma", "Sal, pimenta e coentro"], prep: "1. Refogue a cebola e o alho em 1 fio de azeite por 3 min.\n\n2. Adicione os legumes cortados em cubos médios.\n\n3. Cubra com o caldo de legumes quente.\n\n4. Cozinhe em fogo médio por 20 minutos com tampa.\n\n5. Bata metade da sopa no liquidificador para engrossar. Misture de volta, tempere com cúrcuma e sirva." },
    { name: "Omelete de Claras Fit", emoji: "🍳", cal: 180, img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&h=350&fit=crop", ingredients: ["4 claras de ovo", "Espinafre baby a gosto", "4 tomates cereja", "¼ de cebola roxa", "Sal rosa e pimenta branca", "Ervas finas e manjericão"], prep: "1. Bata as claras com sal e pimenta até ficarem espumosas.\n\n2. Aqueça uma frigideira antiaderente em fogo baixo.\n\n3. Despeje as claras e deixe firmar ligeiramente nas bordas.\n\n4. Distribua o espinafre, tomates e cebola sobre metade.\n\n5. Dobre a omelete, tampe por 1 min e sirva." },
    { name: "Wrap de Atum Detox", emoji: "🫔", cal: 290, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=350&fit=crop", ingredients: ["1 folha de alface grande (como wrap)", "1 lata de atum em água escorrido", "½ abacate", "Tomate cereja cortado", "Limão, sal e pimenta", "Gergelim para finalizar"], prep: "1. Escorra bem o atum e misture com limão, sal e pimenta.\n\n2. Amasse o abacate com um garfo deixando-o cremoso.\n\n3. Espalhe o abacate na folha de alface.\n\n4. Distribua o atum e os tomates cereja.\n\n5. Enrole a alface como wrap e polvilhe gergelim." },
  ],
  "Ganho de massa": [
    { name: "Arroz Frango High Protein", emoji: "🍚", cal: 650, img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&h=350&fit=crop", ingredients: ["200g peito de frango", "1 xícara de arroz integral cozido", "1 batata doce média", "1 col. sopa de azeite", "Alho, sal e páprica defumada", "Brócolis cozido no vapor"], prep: "1. Cozinhe o arroz integral (leva ~35 min). Reserve.\n\n2. Cozinhe a batata doce no vapor por 15 min. Reserve.\n\n3. Tempere o frango com alho, sal e páprica. Grelhe 7 min de cada lado.\n\n4. Cozinhe o brócolis no vapor por 5 min, al dente.\n\n5. Monte o prato com arroz, frango fatiado, batata e brócolis. Regue com azeite." },
    { name: "Vitamina Massa Muscular", emoji: "🥤", cal: 520, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=350&fit=crop", ingredients: ["2 bananas maduras congeladas", "1 dose de whey protein baunilha", "200ml leite integral", "2 col. sopa pasta de amendoim", "1 col. sopa de cacau em pó", "Mel a gosto + gelo"], prep: "1. Congele as bananas no dia anterior para melhor cremosidade.\n\n2. Adicione todos os ingredientes no liquidificador.\n\n3. Bata em alta velocidade por 1 minuto.\n\n4. Prove e adoce com mel se necessário.\n\n5. Beba dentro de 30 minutos após o treino para melhor absorção." },
    { name: "Macarrão Atum Proteico", emoji: "🍝", cal: 580, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=350&fit=crop", ingredients: ["150g macarrão integral penne", "2 latas de atum em água", "2 tomates maduros", "Azeitonas pretas a gosto", "Azeite extra virgem", "Manjericão fresco e sal"], prep: "1. Cozinhe o macarrão em água salgada até al dente.\n\n2. Escorra o macarrão reservando ½ xícara da água do cozimento.\n\n3. Escorra bem o atum das latas.\n\n4. Misture o atum com tomate picado, azeitonas e azeite.\n\n5. Misture com o macarrão quente, adicione um pouco da água do cozimento para emulsionar. Finalize com manjericão." },
    { name: "Panqueca Proteica", emoji: "🥞", cal: 480, img: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=600&h=350&fit=crop", ingredients: ["2 ovos inteiros", "1 banana madura amassada", "2 col. sopa de aveia", "1 dose de whey protein", "Canela e baunilha", "Frutas e mel para servir"], prep: "1. Amasse a banana com um garfo até virar purê.\n\n2. Misture os ovos, aveia, whey, canela e baunilha.\n\n3. Aqueça frigideira antiaderente em fogo baixo com spray de coco.\n\n4. Despeje porções da massa e cozinhe 2 min de cada lado.\n\n5. Sirva com frutas frescas e um fio de mel." },
  ],
  Saudável: [
    { name: "Açaí Bowl Nutritivo", emoji: "🫐", cal: 420, img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=350&fit=crop", ingredients: ["200g polpa de açaí puro", "1 banana congelada", "Granola artesanal", "Morango, kiwi e manga", "Mel puro", "Coco ralado sem açúcar"], prep: "1. Bata o açaí com a banana e apenas 2 col. de água gelada.\n\n2. A consistência deve ser espessa, como sorvete.\n\n3. Despeje em tigela funda gelada.\n\n4. Distribua a granola formando uma faixa.\n\n5. Decore com as frutas fatiadas, coco ralado e finalize com um fio de mel." },
    { name: "Salada Mediterrânea", emoji: "🥙", cal: 320, img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=350&fit=crop", ingredients: ["Rúcula e mix de folhas", "80g queijo feta esmigalhado", "Azeitonas kalamata", "Pepino, tomate cereja e cebola roxa", "Azeite extra virgem", "Vinagre balsâmico reduzido"], prep: "1. Lave e centrifugue as folhas muito bem.\n\n2. Corte o pepino em meias-luas e tomates ao meio.\n\n3. Fatie a cebola em rodelas finas.\n\n4. Monte a salada em camadas, começando pelas folhas.\n\n5. Distribua o feta, azeitonas e legumes. Regue com azeite e balsâmico." },
    { name: "Smoothie Verde Energético", emoji: "🥬", cal: 230, img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=350&fit=crop", ingredients: ["1 maçã verde", "2 folhas de couve kale", "½ pepino", "1 pedaço de gengibre fresco", "Suco de 1 limão siciliano", "200ml água de coco"], prep: "1. Higienize todos os ingredientes muito bem.\n\n2. Corte maçã e pepino em pedaços menores.\n\n3. Adicione todos ao liquidificador com a água de coco.\n\n4. Bata por 2 minutos até ficar homogêneo.\n\n5. Coe se preferir mais líquido. Beba imediatamente para preservar os nutrientes." },
    { name: "Tapioca Saudável", emoji: "🫓", cal: 280, img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=350&fit=crop", ingredients: ["4 col. sopa de goma de tapioca hidratada", "2 fatias de peito de peru", "Queijo cottage light", "Tomate e rúcula", "Azeite e orégano", "Sal a gosto"], prep: "1. Espalhe a goma de tapioca em frigideira seca em fogo médio.\n\n2. Aguarde firmar e virar um disco branco (~2 min).\n\n3. Vire com cuidado e aqueça o outro lado por 1 min.\n\n4. Recheie com cottage, peito de peru e rúcula.\n\n5. Adicione tomate, orégano e um fio de azeite. Dobre e sirva." },
  ],
};

const CALORIES_DB = {
  "arroz": 130, "arroz branco": 130, "arroz integral": 115, "feijão": 76, "feijao": 76,
  "frango": 165, "peito de frango": 165, "carne": 250, "carne bovina": 250, "peixe": 140,
  "atum": 132, "salmão": 208, "salmao": 208, "ovo": 155, "clara de ovo": 52,
  "banana": 89, "maçã": 52, "maca": 52, "laranja": 47, "uva": 67, "mamão": 43,
  "mamao": 43, "abacaxi": 50, "morango": 32, "abacate": 160, "manga": 60,
  "leite": 61, "leite integral": 61, "leite desnatado": 35, "iogurte": 59,
  "queijo": 402, "queijo minas": 264, "whey": 120,
  "pão": 265, "pao": 265, "pão francês": 265, "pão integral": 247, "tapioca": 98,
  "macarrão": 131, "macarrao": 131, "batata": 77, "batata doce": 86, "mandioca": 125,
  "brócolis": 34, "brocolis": 34, "cenoura": 41, "alface": 15, "tomate": 18,
  "espinafre": 23, "abobrinha": 17, "pepino": 15, "cebola": 40,
  "pizza": 266, "hambúrguer": 295, "hamburguer": 295, "batata frita": 312,
  "chocolate": 546, "bolo": 350, "sorvete": 207, "açaí": 58, "acai": 58,
  "café": 2, "cafe": 2, "café com leite": 40, "suco": 45, "refrigerante": 42,
  "cerveja": 43, "vinho": 85, "água de coco": 19, "agua de coco": 19,
  "azeite": 884, "manteiga": 717, "pasta de amendoim": 589, "amendoim": 567,
  "aveia": 389, "granola": 471, "mel": 304, "castanha": 656, "amêndoa": 579,
  "proteína": 120, "proteina": 120, "suplemento": 120,
};

// ===================== STATE =====================
let state = {
  screen: 'auth',
  user: null,
  exerciseLevel: 'Iniciante',
  selectedExercise: null,
  recipeCategory: 'Emagrecimento',
  selectedRecipe: null,
  calorieItems: [],
  calorieTotal: 0,
  steps: 0,
  stepGoal: 10000,
  stepTracking: false,
  stepElapsed: 0,
  stepInterval: null,
};

function setState(updates) {
  Object.assign(state, updates);
  render();
}

// ===================== UTILS =====================
function estimateCal(food) {
  const lower = food.toLowerCase().trim();
  for (const [key, val] of Object.entries(CALORIES_DB)) {
    if (lower.includes(key)) return val;
  }
  return null;
}

function $(id) { return document.getElementById(id); }

function greet() {
  const h = new Date().getHours();
  return h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
}

// ===================== RENDER =====================
function render() {
  const app = $('app');
  const screens = {
    auth: renderAuth,
    home: renderHome,
    exercises: renderExercises,
    exerciseDetail: renderExerciseDetail,
    recipes: renderRecipes,
    recipeDetail: renderRecipeDetail,
    calories: renderCalories,
    steps: renderSteps,
  };
  app.innerHTML = (screens[state.screen] || renderHome)();
  bindEvents();
}

// ===================== AUTH =====================
function renderAuth() {
  return `
  <div class="page" style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;position:relative;overflow:hidden;">
    <div style="position:absolute;top:-100px;left:50%;transform:translateX(-50%);width:500px;height:500px;background:radial-gradient(circle,rgba(0,245,160,0.07) 0%,transparent 70%);pointer-events:none;"></div>
    <div style="width:100%;max-width:400px;">
      <div style="text-align:center;margin-bottom:40px;">
        <div style="font-size:56px;margin-bottom:10px;animation:fadeIn 0.4s ease;">⚡</div>
        <h1 style="font-size:40px;font-weight:900;background:linear-gradient(135deg,#00F5A0,#00D9F5);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:-2px;margin-bottom:6px;">ShapeAI</h1>
        <p style="color:#6B7A99;font-size:14px;">Transforme seu corpo com inteligência</p>
      </div>

      <div style="display:flex;background:#0E1420;border-radius:14px;padding:4px;margin-bottom:28px;" id="auth-tabs">
        <button onclick="switchAuthTab('login')" id="tab-login" style="flex:1;padding:11px;border-radius:11px;border:none;cursor:pointer;background:linear-gradient(135deg,#00F5A0,#00D9F5);color:#080B14;font-weight:800;font-size:14px;">Entrar</button>
        <button onclick="switchAuthTab('register')" id="tab-register" style="flex:1;padding:11px;border-radius:11px;border:none;cursor:pointer;background:transparent;color:#6B7A99;font-weight:700;font-size:14px;">Cadastrar</button>
      </div>

      <div id="register-name-field" style="display:none;margin-bottom:14px;">
        <label style="font-size:11px;color:#6B7A99;display:block;margin-bottom:6px;letter-spacing:1px;">SEU NOME</label>
        <input id="inp-name" type="text" placeholder="Como quer ser chamado?" style="background:#131926;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:13px 16px;color:#E8EDF5;font-size:15px;width:100%;" />
      </div>
      <div style="margin-bottom:14px;">
        <label style="font-size:11px;color:#6B7A99;display:block;margin-bottom:6px;letter-spacing:1px;">EMAIL</label>
        <input id="inp-email" type="email" placeholder="seu@email.com" style="background:#131926;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:13px 16px;color:#E8EDF5;font-size:15px;width:100%;" />
      </div>
      <div style="margin-bottom:6px;">
        <label style="font-size:11px;color:#6B7A99;display:block;margin-bottom:6px;letter-spacing:1px;">SENHA</label>
        <input id="inp-pass" type="password" placeholder="••••••••" style="background:#131926;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:13px 16px;color:#E8EDF5;font-size:15px;width:100%;" />
      </div>
      <p id="auth-err" style="color:#FF4D6D;font-size:13px;min-height:20px;margin:8px 0;"></p>
      <button onclick="handleAuth()" style="background:linear-gradient(135deg,#00F5A0,#00D9F5);border:none;border-radius:12px;color:#080B14;font-weight:800;font-size:16px;padding:15px;cursor:pointer;width:100%;letter-spacing:0.5px;" id="auth-submit-btn">
        Entrar →
      </button>

      <p style="text-align:center;margin-top:20px;color:#6B7A99;font-size:13px;">Demo: qualquer email e senha</p>
    </div>
  </div>`;
}

// ===================== HOME =====================
function renderHome() {
  const items = [
    { key:'exercises', label:'Exercícios', emoji:'🏋️', sub:'Treinos para todos os níveis', color:'#00F5A0' },
    { key:'recipes', label:'Receitas', emoji:'🥗', sub:'Nutrição inteligente', color:'#00D9F5' },
    { key:'calories', label:'Calorias', emoji:'🔥', sub:'Conte suas calorias', color:'#FF6B35' },
    { key:'steps', label:'Passos', emoji:'👟', sub:'Meta diária de passos', color:'#A855F7' },
  ];
  return `
  <div class="page" style="min-height:100vh;padding-bottom:40px;">
    <div style="padding:56px 24px 24px;position:relative;">
      <div style="position:absolute;top:0;right:-50px;width:250px;height:250px;background:radial-gradient(circle,rgba(0,245,160,0.05) 0%,transparent 70%);pointer-events:none;"></div>
      <p style="color:#6B7A99;font-size:14px;margin-bottom:4px;">${greet()},</p>
      <h2 style="font-size:30px;font-weight:900;letter-spacing:-1px;margin-bottom:4px;">${state.user} 👋</h2>
      <p style="color:#6B7A99;font-size:13px;">Pronto para treinar hoje?</p>
    </div>

    <div style="margin:0 24px 28px;padding:18px 20px;background:linear-gradient(135deg,rgba(0,245,160,0.12),rgba(0,217,245,0.06));border:1px solid rgba(0,245,160,0.18);border-radius:20px;">
      <div style="display:flex;align-items:center;gap:14px;">
        <span style="font-size:38px;">🎯</span>
        <div>
          <p style="font-weight:800;font-size:16px;margin-bottom:3px;">Continue sua jornada!</p>
          <p style="font-size:13px;color:#6B7A99;">Consistência é a chave do sucesso</p>
        </div>
      </div>
    </div>

    ${state.steps > 0 ? `
    <div style="margin:0 24px 20px;padding:14px 18px;background:#0E1420;border:1px solid rgba(168,85,247,0.25);border-radius:16px;display:flex;align-items:center;gap:12px;" onclick="setState({screen:'steps'})">
      <span style="font-size:24px;">👟</span>
      <div style="flex:1;">
        <div style="height:6px;background:rgba(255,255,255,0.06);border-radius:99px;overflow:hidden;">
          <div style="height:100%;width:${Math.min((state.steps/state.stepGoal)*100,100)}%;background:linear-gradient(90deg,#A855F7,#7C3AED);border-radius:99px;transition:width 0.3s;"></div>
        </div>
        <p style="font-size:12px;color:#6B7A99;margin-top:5px;">${state.steps.toLocaleString('pt-BR')} / ${state.stepGoal.toLocaleString('pt-BR')} passos hoje</p>
      </div>
    </div>` : ''}

    <div style="padding:0 24px;display:grid;grid-template-columns:1fr 1fr;gap:14px;">
      ${items.map(item => `
      <div class="card-hover" onclick="setState({screen:'${item.key}'})" style="background:#0E1420;border:1px solid rgba(255,255,255,0.07);border-radius:20px;padding:20px;cursor:pointer;position:relative;overflow:hidden;">
        <div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;background:radial-gradient(circle,${item.color}22 0%,transparent 70%);"></div>
        <span style="font-size:34px;display:block;margin-bottom:10px;">${item.emoji}</span>
        <p style="font-weight:800;font-size:17px;margin-bottom:3px;">${item.label}</p>
        <p style="font-size:11px;color:#6B7A99;margin-bottom:10px;">${item.sub}</p>
        <div style="width:28px;height:3px;border-radius:99px;background:${item.color};"></div>
      </div>`).join('')}
    </div>
  </div>`;
}

// ===================== EXERCISES =====================
function renderExercises() {
  const levels = Object.keys(EXERCISES);
  const colors = { Iniciante:'#00F5A0', Intermediário:'#FFB800', Avançado:'#FF4D6D' };
  const l = state.exerciseLevel;
  const list = EXERCISES[l];
  return `
  <div class="page" style="min-height:100vh;padding-bottom:40px;">
    <div style="padding:56px 24px 24px;">
      <button onclick="setState({screen:'home'})" style="background:transparent;border:none;color:#6B7A99;cursor:pointer;font-size:14px;padding:0 0 16px;display:flex;align-items:center;gap:6px;">← Voltar</button>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:20px;">🏋️ Exercícios</h2>
      <div style="display:flex;gap:8px;margin-bottom:24px;">
        ${levels.map(lv => `
        <button onclick="setState({exerciseLevel:'${lv}'})" style="flex:1;padding:10px 4px;border-radius:12px;border:1px solid ${l===lv ? colors[lv] : 'rgba(255,255,255,0.07)'};background:${l===lv ? colors[lv]+'20' : 'transparent'};color:${l===lv ? colors[lv] : '#6B7A99'};font-weight:700;cursor:pointer;font-size:12px;transition:all 0.2s;">${lv}</button>
        `).join('')}
      </div>
      <div style="display:flex;flex-direction:column;gap:14px;">
        ${list.map((ex, i) => `
        <div class="card-hover" onclick="setState({selectedExercise:${i},screen:'exerciseDetail'})" style="background:#0E1420;border:1px solid rgba(255,255,255,0.07);border-radius:18px;padding:14px;display:flex;gap:14px;align-items:center;cursor:pointer;">
          <img src="${ex.img}" alt="${ex.name}" style="width:76px;height:76px;object-fit:cover;border-radius:12px;flex-shrink:0;" loading="lazy" />
          <div style="flex:1;min-width:0;">
            <p style="font-weight:800;font-size:16px;margin-bottom:4px;">${ex.emoji} ${ex.name}</p>
            <p style="font-size:12px;color:#6B7A99;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;">${ex.desc.split('\n')[0]}</p>
          </div>
          <span style="color:#6B7A99;font-size:20px;flex-shrink:0;">›</span>
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function renderExerciseDetail() {
  const colors = { Iniciante:'#00F5A0', Intermediário:'#FFB800', Avançado:'#FF4D6D' };
  const ex = EXERCISES[state.exerciseLevel][state.selectedExercise];
  const c = colors[state.exerciseLevel];
  return `
  <div class="page" style="min-height:100vh;padding-bottom:40px;">
    <div style="position:relative;height:260px;overflow:hidden;">
      <img src="${ex.img}" alt="${ex.name}" style="width:100%;height:100%;object-fit:cover;" />
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,11,20,0.2),rgba(8,11,20,1));"></div>
      <button onclick="setState({screen:'exercises'})" style="position:absolute;top:50px;left:20px;background:rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.15);border-radius:12px;color:#fff;padding:8px 14px;cursor:pointer;font-size:14px;backdrop-filter:blur(8px);">← Voltar</button>
    </div>
    <div style="padding:0 24px 40px;margin-top:-16px;">
      <span style="background:${c}22;color:${c};padding:4px 12px;border-radius:99px;font-size:12px;font-weight:700;">${state.exerciseLevel}</span>
      <h2 style="font-size:26px;font-weight:900;margin:12px 0 20px;">${ex.emoji} ${ex.name}</h2>
      <div style="padding:20px;background:#0E1420;border:1px solid rgba(255,255,255,0.07);border-radius:18px;">
        <p style="color:${c};font-weight:700;font-size:12px;letter-spacing:1px;margin-bottom:14px;">📋 COMO FAZER</p>
        <p style="line-height:1.8;white-space:pre-line;font-size:15px;color:#E8EDF5;">${ex.desc}</p>
      </div>
    </div>
  </div>`;
}

// ===================== RECIPES =====================
function renderRecipes() {
  const cats = Object.keys(RECIPES);
  const colors = { Emagrecimento:'#00F5A0', 'Ganho de massa':'#FF6B35', Saudável:'#00D9F5' };
  const c = state.recipeCategory;
  const list = RECIPES[c];
  return `
  <div class="page" style="min-height:100vh;padding-bottom:40px;">
    <div style="padding:56px 24px 24px;">
      <button onclick="setState({screen:'home'})" style="background:transparent;border:none;color:#6B7A99;cursor:pointer;font-size:14px;padding:0 0 16px;">← Voltar</button>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:20px;">🥗 Receitas</h2>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px;">
        ${cats.map(cat => `
        <button onclick="setState({recipeCategory:'${cat}'})" style="padding:12px 16px;border-radius:12px;border:1px solid ${c===cat ? colors[cat] : 'rgba(255,255,255,0.07)'};background:${c===cat ? colors[cat]+'15' : 'transparent'};color:${c===cat ? colors[cat] : '#6B7A99'};font-weight:700;cursor:pointer;text-align:left;font-size:14px;transition:all 0.2s;">${c===cat ? '▸ ' : '  '}${cat}</button>
        `).join('')}
      </div>
      <div style="display:flex;flex-direction:column;gap:16px;">
        ${list.map((r, i) => `
        <div class="card-hover" onclick="setState({selectedRecipe:${i},screen:'recipeDetail'})" style="background:#0E1420;border:1px solid rgba(255,255,255,0.07);border-radius:20px;overflow:hidden;cursor:pointer;">
          <div style="position:relative;height:170px;">
            <img src="${r.img}" alt="${r.name}" style="width:100%;height:100%;object-fit:cover;" loading="lazy" />
            <div style="position:absolute;top:12px;right:12px;background:rgba(8,11,20,0.85);padding:4px 10px;border-radius:99px;font-size:12px;font-weight:700;color:#FFB800;backdrop-filter:blur(4px);">🔥 ${r.cal} kcal</div>
          </div>
          <div style="padding:14px 16px;">
            <p style="font-weight:800;font-size:17px;margin-bottom:4px;">${r.emoji} ${r.name}</p>
            <p style="font-size:12px;color:#6B7A99;">${r.ingredients.length} ingredientes · Ver receita completa →</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function renderRecipeDetail() {
  const colors = { Emagrecimento:'#00F5A0', 'Ganho de massa':'#FF6B35', Saudável:'#00D9F5' };
  const r = RECIPES[state.recipeCategory][state.selectedRecipe];
  const c = colors[state.recipeCategory];
  return `
  <div class="page" style="min-height:100vh;padding-bottom:40px;">
    <div style="position:relative;height:280px;overflow:hidden;">
      <img src="${r.img}" alt="${r.name}" style="width:100%;height:100%;object-fit:cover;" />
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,11,20,0.1),rgba(8,11,20,1));"></div>
      <button onclick="setState({screen:'recipes'})" style="position:absolute;top:50px;left:20px;background:rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.15);border-radius:12px;color:#fff;padding:8px 14px;cursor:pointer;font-size:14px;backdrop-filter:blur(8px);">← Voltar</button>
      <div style="position:absolute;bottom:22px;left:24px;right:24px;">
        <h2 style="font-size:24px;font-weight:900;margin-bottom:4px;text-shadow:0 2px 8px rgba(0,0,0,0.8);">${r.emoji} ${r.name}</h2>
        <span style="color:${c};font-weight:700;font-size:13px;">🔥 ${r.cal} kcal por porção · ${r.ingredients.length} ingredientes</span>
      </div>
    </div>
    <div style="padding:20px 24px 40px;">
      <div style="padding:20px;background:#0E1420;border:1px solid rgba(255,255,255,0.07);border-radius:18px;margin-bottom:16px;">
        <p style="color:#00F5A0;font-weight:700;font-size:12px;letter-spacing:1px;margin-bottom:14px;">🛒 INGREDIENTES</p>
        ${r.ingredients.map((ing, i) => `
        <div style="display:flex;align-items:center;gap:10px;padding:9px 0;${i < r.ingredients.length-1 ? 'border-bottom:1px solid rgba(255,255,255,0.05);' : ''}">
          <div style="width:6px;height:6px;border-radius:50%;background:#00F5A0;flex-shrink:0;"></div>
          <span style="font-size:14px;">${ing}</span>
        </div>`).join('')}
      </div>
      <div style="padding:20px;background:#0E1420;border:1px solid rgba(255,255,255,0.07);border-radius:18px;">
        <p style="color:${c};font-weight:700;font-size:12px;letter-spacing:1px;margin-bottom:14px;">👨‍🍳 MODO DE PREPARO</p>
        <p style="line-height:1.9;white-space:pre-line;font-size:14px;color:#E8EDF5;">${r.prep}</p>
      </div>
    </div>
  </div>`;
}

// ===================== CALORIES =====================
function renderCalories() {
  const prog = Math.min((state.calorieTotal / 2000) * 100, 100);
  const remaining = 2000 - state.calorieTotal;
  return `
  <div class="page" style="min-height:100vh;padding-bottom:60px;">
    <div style="padding:56px 24px 24px;">
      <button onclick="setState({screen:'home'})" style="background:transparent;border:none;color:#6B7A99;cursor:pointer;font-size:14px;padding:0 0 16px;">← Voltar</button>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:4px;">🔥 Calorias</h2>
      <p style="color:#6B7A99;font-size:13px;margin-bottom:24px;">Meta diária recomendada: 2.000 kcal</p>

      <div style="padding:22px;background:linear-gradient(135deg,rgba(255,107,53,0.12),rgba(255,184,0,0.06));border:1px solid rgba(255,107,53,0.22);border-radius:20px;margin-bottom:24px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:16px;">
          <div>
            <p style="font-size:12px;color:#6B7A99;margin-bottom:4px;letter-spacing:1px;">CONSUMIDO HOJE</p>
            <p style="font-size:44px;font-weight:900;color:#FF6B35;line-height:1;">${state.calorieTotal.toLocaleString('pt-BR')} <span style="font-size:18px;color:#6B7A99;">kcal</span></p>
          </div>
          <div style="text-align:right;">
            <p style="font-size:13px;color:${remaining > 0 ? '#6B7A99' : '#FF4D6D'};">${remaining > 0 ? `${remaining} restantes` : `${Math.abs(remaining)} acima`}</p>
            <p style="font-size:11px;color:#6B7A99;margin-top:2px;">${prog.toFixed(0)}% da meta</p>
          </div>
        </div>
        <div style="height:8px;background:rgba(255,255,255,0.06);border-radius:99px;overflow:hidden;">
          <div style="height:100%;width:${prog}%;background:${prog > 95 ? 'linear-gradient(90deg,#FF4D6D,#FF6B35)' : 'linear-gradient(90deg,#FF6B35,#FFB800)'};border-radius:99px;transition:width 0.4s ease;"></div>
        </div>
      </div>

      <div style="display:flex;gap:10px;margin-bottom:10px;">
        <input id="food-input" type="text" placeholder="Ex: frango grelhado, arroz..." style="flex:2;background:#131926;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:13px 16px;color:#E8EDF5;font-size:14px;" onkeydown="if(event.key==='Enter')addCalorie()" />
        <input id="qty-input" type="number" placeholder="g" value="100" style="flex:1;background:#131926;border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:13px 10px;color:#E8EDF5;font-size:14px;text-align:center;" />
      </div>
      <button onclick="addCalorie()" style="background:linear-gradient(135deg,#00F5A0,#00D9F5);border:none;border-radius:12px;color:#080B14;font-weight:800;font-size:15px;padding:14px;cursor:pointer;width:100%;margin-bottom:24px;">+ Adicionar Alimento</button>

      ${state.calorieItems.length > 0 ? `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <p style="font-size:12px;color:#6B7A99;letter-spacing:1px;">ALIMENTOS (${state.calorieItems.length})</p>
        <button onclick="clearCalories()" style="background:transparent;border:none;color:#FF4D6D;font-size:12px;cursor:pointer;">Limpar tudo</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${state.calorieItems.map(item => `
        <div style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:#0E1420;border:1px solid rgba(255,255,255,0.07);border-radius:14px;">
          <div style="flex:1;min-width:0;">
            <p style="font-weight:700;font-size:15px;text-transform:capitalize;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.food}</p>
            <p style="font-size:12px;color:#6B7A99;">${item.qty}g</p>
          </div>
          ${item.cal !== null
            ? `<span style="font-weight:900;color:#FF6B35;font-size:16px;white-space:nowrap;">${item.cal} kcal</span>`
            : `<span style="color:#6B7A99;font-size:12px;">Não encontrado</span>`
          }
          <button onclick="removeCalorie(${item.id})" style="background:transparent;border:none;color:#6B7A99;cursor:pointer;font-size:20px;padding:2px 4px;flex-shrink:0;">×</button>
        </div>`).join('')}
      </div>` : `
      <div style="text-align:center;padding:40px 20px;">
        <p style="font-size:36px;margin-bottom:12px;">🍽️</p>
        <p style="color:#6B7A99;font-size:14px;">Adicione alimentos para contar suas calorias</p>
      </div>`}
    </div>
  </div>`;
}

function addCalorie() {
  const food = $('food-input').value.trim();
  const qty = parseFloat($('qty-input').value) || 100;
  if (!food) return;
  const base = estimateCal(food);
  const cal = base !== null ? Math.round(base * qty / 100) : null;
  const item = { id: Date.now(), food, qty, cal };
  state.calorieItems = [item, ...state.calorieItems];
  state.calorieTotal = state.calorieTotal + (cal || 0);
  setState({});
}

function removeCalorie(id) {
  const item = state.calorieItems.find(i => i.id === id);
  state.calorieItems = state.calorieItems.filter(i => i.id !== id);
  if (item && item.cal) state.calorieTotal = state.calorieTotal - item.cal;
  setState({});
}

function clearCalories() {
  state.calorieItems = [];
  state.calorieTotal = 0;
  setState({});
}

// ===================== STEPS =====================
function renderSteps() {
  const prog = Math.min((state.steps / state.stepGoal) * 100, 100);
  const km = (state.steps * 0.00075).toFixed(2);
  const cal = Math.round(state.steps * 0.04);
  const mins = Math.floor(state.stepElapsed / 60);
  const secs = state.stepElapsed % 60;
  const r = 98;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - prog / 100);

  return `
  <div class="page" style="min-height:100vh;padding-bottom:50px;">
    <div style="padding:56px 24px 24px;">
      <button onclick="goBackFromSteps()" style="background:transparent;border:none;color:#6B7A99;cursor:pointer;font-size:14px;padding:0 0 16px;">← Voltar</button>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:28px;">👟 Contador de Passos</h2>

      <div style="display:flex;justify-content:center;margin-bottom:32px;">
        <div style="position:relative;width:220px;height:220px;">
          <svg width="220" height="220" style="position:absolute;top:0;left:0;transform:rotate(-90deg);">
            <defs>
              <linearGradient id="stepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#A855F7"/>
                <stop offset="100%" stop-color="#7C3AED"/>
              </linearGradient>
            </defs>
            <circle cx="110" cy="110" r="${r}" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="12"/>
            <circle cx="110" cy="110" r="${r}" fill="none" stroke="${state.stepTracking ? 'url(#stepGrad)' : '#A855F7'}" stroke-width="12"
              stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
              stroke-linecap="round" style="transition:stroke-dashoffset 0.3s ease;"/>
          </svg>
          <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <span style="font-size:42px;font-weight:900;line-height:1;background:linear-gradient(135deg,#A855F7,#7C3AED);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${state.steps.toLocaleString('pt-BR')}</span>
            <span style="font-size:13px;color:#6B7A99;margin-top:5px;">de ${state.stepGoal.toLocaleString('pt-BR')}</span>
            <span style="font-size:12px;color:#A855F7;margin-top:5px;font-weight:700;">${prog.toFixed(0)}%</span>
            ${state.stepTracking ? '<span style="font-size:11px;color:#00F5A0;margin-top:4px;animation:pulse 1s infinite;">● gravando</span>' : ''}
          </div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:28px;">
        ${[
          { label:'Distância', value:`${km} km`, emoji:'📍' },
          { label:'Calorias', value:`${cal} kcal`, emoji:'🔥' },
          { label:'Tempo', value:`${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`, emoji:'⏱️' },
        ].map(s => `
        <div style="padding:14px 10px;background:#0E1420;border:1px solid rgba(255,255,255,0.07);border-radius:16px;text-align:center;">
          <div style="font-size:22px;margin-bottom:5px;">${s.emoji}</div>
          <p style="font-weight:800;font-size:15px;margin-bottom:2px;">${s.value}</p>
          <p style="font-size:11px;color:#6B7A99;">${s.label}</p>
        </div>`).join('')}
      </div>

      <div style="padding:16px;background:#0E1420;border:1px solid rgba(255,255,255,0.07);border-radius:16px;margin-bottom:20px;">
        <p style="font-size:12px;color:#6B7A99;letter-spacing:1px;margin-bottom:12px;">META DIÁRIA</p>
        <div style="display:flex;gap:8px;">
          ${[5000, 8000, 10000, 15000].map(g => `
          <button onclick="setState({stepGoal:${g}})" style="flex:1;padding:9px 4px;border-radius:10px;border:1px solid ${state.stepGoal===g ? '#A855F7' : 'rgba(255,255,255,0.07)'};background:${state.stepGoal===g ? 'rgba(168,85,247,0.18)' : 'transparent'};color:${state.stepGoal===g ? '#A855F7' : '#6B7A99'};font-weight:700;cursor:pointer;font-size:12px;">${g >= 1000 ? g/1000+'k' : g}</button>
          `).join('')}
        </div>
      </div>

      <div style="display:flex;gap:10px;">
        <button onclick="toggleSteps()" style="flex:2;background:linear-gradient(135deg,#A855F7,#7C3AED);border:none;border-radius:12px;color:#fff;font-weight:800;font-size:15px;padding:15px;cursor:pointer;">
          ${state.stepTracking ? '⏸ Pausar' : state.steps > 0 ? '▶ Continuar' : '▶ Iniciar'}
        </button>
        <button onclick="resetSteps()" style="flex:1;background:transparent;border:1px solid rgba(255,255,255,0.07);border-radius:12px;color:#6B7A99;font-weight:700;font-size:14px;padding:15px;cursor:pointer;">↺ Reset</button>
      </div>

      ${prog >= 100 ? `
      <div style="margin-top:20px;padding:18px;background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.3);border-radius:16px;text-align:center;">
        <p style="font-size:22px;font-weight:900;color:#A855F7;margin-bottom:4px;">🎉 Meta atingida!</p>
        <p style="color:#6B7A99;font-size:13px;">Incrível! Você completou sua meta de passos hoje!</p>
      </div>` : ''}
    </div>
  </div>
  <style>@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }</style>`;
}

function toggleSteps() {
  if (state.stepTracking) {
    clearInterval(state.stepInterval);
    setState({ stepTracking: false, stepInterval: null });
  } else {
    const interval = setInterval(() => {
      state.steps += Math.floor(Math.random() * 3 + 1);
      state.stepElapsed += 1;
      const el = document.querySelector('[data-steps]');
      // lightweight update: just re-render
      render();
    }, 600);
    setState({ stepTracking: true, stepInterval: interval });
  }
}

function resetSteps() {
  clearInterval(state.stepInterval);
  setState({ steps: 0, stepTracking: false, stepInterval: null, stepElapsed: 0 });
}

function goBackFromSteps() {
  clearInterval(state.stepInterval);
  state.stepTracking = false;
  state.stepInterval = null;
  setState({ screen: 'home' });
}

// ===================== AUTH HELPERS =====================
let authMode = 'login';

function switchAuthTab(mode) {
  authMode = mode;
  $('tab-login').style.background = mode === 'login' ? 'linear-gradient(135deg,#00F5A0,#00D9F5)' : 'transparent';
  $('tab-login').style.color = mode === 'login' ? '#080B14' : '#6B7A99';
  $('tab-register').style.background = mode === 'register' ? 'linear-gradient(135deg,#00F5A0,#00D9F5)' : 'transparent';
  $('tab-register').style.color = mode === 'register' ? '#080B14' : '#6B7A99';
  $('register-name-field').style.display = mode === 'register' ? 'block' : 'none';
  $('auth-submit-btn').textContent = mode === 'login' ? 'Entrar →' : 'Criar conta →';
}

function handleAuth() {
  const email = $('inp-email').value.trim();
  const pass = $('inp-pass').value;
  const name = authMode === 'register' ? $('inp-name').value.trim() : '';
  $('auth-err').textContent = '';
  if (!email) { $('auth-err').textContent = 'Informe seu email'; return; }
  if (!pass) { $('auth-err').textContent = 'Informe sua senha'; return; }
  if (authMode === 'register' && !name) { $('auth-err').textContent = 'Informe seu nome'; return; }
  setState({ screen: 'home', user: name || email.split('@')[0] || 'Atleta' });
}

// ===================== BIND =====================
function bindEvents() {
  // Allow Enter on auth inputs
  ['inp-email', 'inp-pass', 'inp-name'].forEach(id => {
    const el = $(id);
    if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') handleAuth(); });
  });
}

// ===================== PWA =====================
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  $('install-banner').style.display = 'block';
});

$('install-btn').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  $('install-banner').style.display = 'none';
});

$('install-dismiss').addEventListener('click', () => {
  $('install-banner').style.display = 'none';
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// ===================== INIT =====================
render();
