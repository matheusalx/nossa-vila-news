export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  category: string;
  isUrgent?: boolean;
  isFeatured?: boolean;
  viewCount: number;
}

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Nova Biblioteca Municipal Será Inaugurada no Próximo Mês',
    summary: 'O projeto da nova biblioteca central promete ser um marco cultural para nossa cidade, com mais de 50 mil livros e espaços modernos para estudo.',
    content: `A Prefeitura Municipal anuncia com orgulho a inauguração da nova Biblioteca Central, prevista para acontecer no próximo mês. O projeto, que levou dois anos para ser concluído, representa um investimento de R$ 2,5 milhões em infraestrutura cultural para nossa comunidade.

A nova biblioteca contará com um acervo inicial de 50 mil livros, salas de estudo individuais e coletivas, auditório com capacidade para 200 pessoas, laboratório de informática com 30 computadores, e uma seção infantil especialmente projetada para incentivar o hábito da leitura desde a infância.

"Esta biblioteca não é apenas um depósito de livros, mas um centro vivo de aprendizado e cultura", declarou o prefeito durante coletiva de imprensa. "Queremos que seja um espaço onde nossa comunidade possa se encontrar, aprender e crescer juntos."`,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
    author: 'Maria Silva',
    publishDate: 'Há 2 horas',
    category: 'Cultura',
    isFeatured: true,
    viewCount: 1247
  },
  {
    id: '2',
    title: 'Time Municipal Conquista Campeonato Regional',
    summary: 'Após uma final emocionante, nossa equipe local trouxe para casa o troféu do campeonato regional de futebol.',
    content: `Em uma partida eletrizante que manteve os torcedores em suspense até o último minuto, o time municipal conquistou o título do Campeonato Regional de Futebol. A vitória veio nos pênaltis, após um empate em 2x2 no tempo normal.

O goleiro João Santos foi o herói da noite ao defender três cobranças de pênalti, garantindo o título tão sonhado pela torcida local. "É um sonho realizado", declarou o capitão do time. "Toda a cidade merece essa conquista."

A celebração tomou conta das ruas, com milhares de pessoas comemorando até altas horas. A Prefeitura já anunciou que organizará um desfile para homenagear os campeões.`,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    author: 'Carlos Santos',
    publishDate: 'Há 4 horas',
    category: 'Esporte',
    isFeatured: true,
    viewCount: 2341
  },
  {
    id: '3',
    title: 'URGENTE: Novo Hospital Regional Recebe Primeiros Pacientes',
    summary: 'O moderno hospital regional iniciou suas atividades hoje, oferecendo atendimento 24h e especialidades médicas avançadas.',
    content: `O Hospital Regional Municipal iniciou oficialmente suas atividades na manhã de hoje, marcando um novo capítulo na saúde pública local. A unidade conta com 150 leitos, centro cirúrgico com 8 salas, UTI com 20 leitos e pronto-socorro com capacidade para 300 atendimentos diários.

A nova instalação representa um investimento de R$ 45 milhões e promete revolucionar o atendimento médico na região. "Agora nossa população não precisará mais se deslocar para centros maiores para receber tratamento especializado", afirmou a secretária de Saúde.

O hospital oferece especialidades como cardiologia, neurologia, ortopedia e pediatria, além de contar com equipamentos de última geração para diagnóstico por imagem.`,
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800',
    author: 'Dr. Ana Costa',
    publishDate: 'Há 1 hora',
    category: 'Saúde',
    isUrgent: true,
    isFeatured: true,
    viewCount: 3892
  },
  {
    id: '4',
    title: 'Festival de Inverno Movimenta Centro Histórico',
    summary: 'Três dias de música, gastronomia e cultura atraem milhares de visitantes para o coração da cidade.',
    content: `O Festival de Inverno transformou o centro histórico em um palco a céu aberto, reunindo artistas locais e regionais em uma celebração da cultura municipal. Durante três dias, mais de 50 apresentações aconteceram em cinco palcos diferentes.

A gastronomia local foi outro destaque, com barracas oferecendo pratos tradicionais e criações especiais dos chefs da cidade. O movimento econômico gerado pelo festival é estimado em R$ 800 mil, beneficiando hotéis, restaurantes e comércio local.

"O festival consolida nossa cidade como destino cultural da região", destacou o secretário de Turismo. A próxima edição já está sendo planejada para o ano que vem.`,
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
    author: 'Pedro Oliveira',
    publishDate: 'Há 6 horas',
    category: 'Cultura',
    viewCount: 892
  },
  {
    id: '5',
    title: 'Programa de Reciclagem Reduz Lixo em 40%',
    summary: 'Iniciativa municipal de coleta seletiva mostra resultados impressionantes em apenas seis meses.',
    content: `O programa municipal de reciclagem superou todas as expectativas ao reduzir em 40% a quantidade de lixo enviado para aterros sanitários. A iniciativa, lançada há seis meses, já coletou mais de 200 toneladas de materiais recicláveis.

"O sucesso do programa se deve principalmente à conscientização da população", explicou a coordenadora do projeto ambiental. Mais de 15 mil famílias aderiram à coleta seletiva, separando corretamente os resíduos em suas residências.

Os materiais coletados geram renda para 40 famílias de catadores organizados em cooperativa, criando um ciclo virtuoso de sustentabilidade e inclusão social.`,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
    author: 'Marina Verde',
    publishDate: 'Há 8 horas',
    category: 'Meio Ambiente',
    viewCount: 1523
  },
  {
    id: '6',
    title: 'Escola Digital: Tecnologia na Sala de Aula',
    summary: 'Projeto piloto introduz tablets e lousas digitais em cinco escolas municipais.',
    content: `A educação municipal dá um salto tecnológico com o projeto "Escola Digital", que equipou cinco unidades escolares com tablets, lousas digitais e internet de alta velocidade. Mais de 1.200 alunos serão beneficiados pela iniciativa.

O projeto inclui capacitação de 80 professores para o uso das novas ferramentas pedagógicas. "A tecnologia não substitui o professor, mas potencializa seu trabalho", afirmou a secretária de Educação durante o lançamento.

Os primeiros resultados mostram maior engajamento dos estudantes e melhora no desempenho em disciplinas como matemática e ciências. O sucesso do piloto determinará a expansão para toda a rede municipal.`,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    author: 'Prof. Roberto Lima',
    publishDate: 'Há 12 horas',
    category: 'Educação',
    viewCount: 1876
  },
  {
    id: '7',
    title: 'Nova Ciclovia Conecta Bairros da Cidade',
    summary: 'Projeto de mobilidade urbana inaugura 15 km de ciclovias integradas com transporte público.',
    content: `A cidade ganhou uma nova opção de transporte sustentável com a inauguração de 15 quilômetros de ciclovias que conectam os principais bairros ao centro. O projeto faz parte do plano municipal de mobilidade urbana.

As novas vias exclusivas para ciclistas contam com sinalização LED, bicicletários em pontos estratégicos e integração com as estações de ônibus. "Queremos incentivar o uso da bicicleta como meio de transporte seguro e ecológico", destacou o secretário de Trânsito.

A iniciativa já mostra resultados: o número de ciclistas nas ruas aumentou 60% no primeiro mês após a inauguração.`,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    author: 'Lucas Ferreira',
    publishDate: 'Há 14 horas',
    category: 'Meio Ambiente',
    viewCount: 743
  },
  {
    id: '8',
    title: 'Mercado Municipal Ganha Novo Espaço Gourmet',
    summary: 'Reforma amplia área gastronômica e cria ambiente moderno para degustação de produtos locais.',
    content: `O tradicional Mercado Municipal foi revitalizado e agora conta com um espaço gourmet de 300m² dedicado à gastronomia local. A reforma preservou a arquitetura histórica enquanto modernizou as instalações.

O novo espaço abriga 12 restaurantes especializados em culinária regional, além de uma área de degustação de produtos artesanais. "É um resgate da nossa cultura gastronômica", afirmou o chef responsável pelo projeto.

A iniciativa já atraiu mais de 50 mil visitantes em seu primeiro mês, movimentando a economia local e valorizando os produtores rurais da região.`,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    author: 'Chef Marina Gomes',
    publishDate: 'Há 18 horas',
    category: 'Economia',
    viewCount: 2156
  },
  {
    id: '9',
    title: 'Programa Social Atende 500 Famílias',
    summary: 'Iniciativa municipal oferece cursos profissionalizantes e auxílio para geração de renda.',
    content: `O programa "Família Forte" completou um ano atendendo famílias em situação de vulnerabilidade social. A iniciativa já capacitou 500 famílias em cursos profissionalizantes e auxílio para empreendedorismo.

Os cursos oferecidos incluem padaria, costura, informática básica e artesanato. Além da capacitação, o programa oferece microcrédito para quem deseja abrir o próprio negócio.

"Nosso objetivo é dar autonomia às famílias, não apenas assistência", explicou a coordenadora do programa social. A taxa de empregabilidade entre os participantes chegou a 85%.`,
    image: 'https://images.unsplash.com/photo-1559027692-86c55dd77113?w=800',
    author: 'Assistente Social Ana Paula',
    publishDate: 'Há 1 dia',
    category: 'Política',
    viewCount: 987
  },
  {
    id: '10',
    title: 'Academia ao Ar Livre no Parque Central',
    summary: 'Novos equipamentos de ginástica são instalados no principal parque da cidade.',
    content: `O Parque Central ganhou uma academia ao ar livre com 15 equipamentos de ginástica, proporcionando mais uma opção de exercícios gratuitos para a população. Os aparelhos são adaptados para todas as idades.

A instalação faz parte do programa municipal "Cidade Ativa", que visa promover atividade física e qualidade de vida. Profissionais de educação física estarão disponíveis três vezes por semana para orientar os usuários.

"Queremos transformar nossos parques em centros de promoção da saúde", disse o secretário de Esportes durante a inauguração dos equipamentos.`,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    author: 'Prof. Carlos Eduardo',
    publishDate: 'Há 1 dia',
    category: 'Esporte',
    viewCount: 1432
  },
  {
    id: '11',
    title: 'Festival de Arte de Rua Transforma Centro',
    summary: 'Artistas locais criam murais gigantes em prédios públicos durante evento cultural.',
    content: `O centro da cidade se transformou em uma galeria a céu aberto durante o Festival de Arte de Rua. Doze artistas locais criaram murais temáticos em fachadas de prédios públicos.

As obras retratam a história e cultura local, desde os primeiros habitantes até os dias atuais. O festival durou uma semana e atraiu milhares de visitantes que acompanharam o processo criativo dos artistas.

"A arte urbana valoriza nossos espaços públicos e conta nossa história de forma visual", destacou a secretária de Cultura. Os murais permanecerão como patrimônio artístico da cidade.`,
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800',
    author: 'Artista Visual João Santos',
    publishDate: 'Há 2 dias',
    category: 'Cultura',
    viewCount: 654
  },
  {
    id: '12',
    title: 'Posto de Saúde 24h no Bairro Jardim',
    summary: 'Nova unidade amplia cobertura médica nas áreas periféricas da cidade.',
    content: `O Bairro Jardim ganhou uma nova unidade de saúde que funciona 24 horas, ampliando significativamente o atendimento médico nas áreas periféricas. A unidade conta com pronto-atendimento, farmácia e laboratório.

A nova instalação atende uma população de aproximadamente 15 mil pessoas que antes precisavam se deslocar ao centro para emergências médicas. A equipe é composta por médicos, enfermeiros e técnicos especializados.

"Saúde de qualidade deve chegar a todos os cantos da nossa cidade", afirmou a secretária de Saúde durante a inauguração da nova unidade.`,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
    author: 'Dra. Patricia Mendes',
    publishDate: 'Há 2 dias',
    category: 'Saúde',
    viewCount: 1098
  }
];

export const getFeaturedNews = () => mockNews.filter(news => news.isFeatured);
export const getLatestNews = () => mockNews.filter(news => !news.isFeatured);
export const getNewsByCategory = (category: string) => 
  category === 'Todas' ? mockNews : mockNews.filter(news => news.category === category);
export const getNewsById = (id: string) => mockNews.find(news => news.id === id);
export const getMostReadNews = () => [...mockNews].sort((a, b) => b.viewCount - a.viewCount).slice(0, 5);
export const getRelatedNews = (currentId: string, category: string) => 
  mockNews.filter(news => news.id !== currentId && news.category === category).slice(0, 3);