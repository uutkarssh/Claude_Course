export interface ContentBlock {
  type: 'text' | 'code' | 'table' | 'tip' | 'warning' | 'prompt' | 'list' | 'heading' | 'subheading';
  content?: string;
  language?: string;
  headers?: string[];
  rows?: string[][];
  icon?: string;
}

export interface CoursePart {
  number: number;
  id: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  sections: {
    id: string;
    title: string;
    badge?: string;
    blocks: ContentBlock[];
  }[];
}

export const courseParts: CoursePart[] = [
  {
    number: 1,
    id: 'part-1',
    title: 'Accounts Kaise Banayein',
    subtitle: 'Teen zaroori websites par account banana seekho — Claude AI, GitHub, aur Vercel',
    eyebrow: 'PART 01',
    sections: [
      {
        id: 'intro',
        title: 'Introduction',
        blocks: [
          { type: 'text', content: 'Sabse pehle humein 3 websites par account banana hai. Ye teen websites hain jo hum is poore guide mein use karenge:' },
          { type: 'list', content: '<strong>Claude AI</strong> — Website ka code banane ke liye\n<strong>GitHub</strong> — Code store karne ke liye\n<strong>Vercel</strong> — Website ko internet par live karne ke liye' },
        ]
      },
      {
        id: 'claude-setup',
        title: 'Claude AI Account Banana',
        badge: '1',
        blocks: [
          { type: 'text', content: '<strong>Step 1:</strong> Apne phone ya laptop mein browser kholo (Chrome best hai)' },
          { type: 'text', content: '<strong>Step 2:</strong> Search karo <strong>"Claude AI"</strong> ya directly jao <code>claude.ai</code>' },
          { type: 'text', content: '<strong>Step 3:</strong> Tumhe aisa page dikhega — <em>"Talk with Claude"</em> — yahan <strong>"Sign Up"</strong> button dikhega, us par click karo' },
          { type: 'text', content: '<strong>Step 4:</strong> Ab tumhare paas 2 options honge:' },
          { type: 'list', content: '<strong>Google se sign up karo</strong> (sabse easy — apni Gmail use karo)\nYa email aur password daalke manually sign up karo' },
          { type: 'tip', content: '<strong>Tip:</strong> Google se sign up karo — fast aur easy hai. Aur jo Gmail use karo, <strong>yaad rakh lena</strong> — wahi Gmail aage GitHub aur Vercel mein bhi use karni hai!' },
          { type: 'text', content: '<strong>Step 5:</strong> Sign up hone ke baad Claude ka chat interface khulega — kuch aisa dikhega:' },
          { type: 'code', language: 'text', content: '"How can I help you today?"' },
          { type: 'text', content: '<strong>Congratulations!</strong> Claude AI ready hai!' },
        ]
      },
      {
        id: 'github-setup',
        title: 'GitHub Account Banana',
        badge: '2',
        blocks: [
          { type: 'text', content: 'GitHub ek jagah hai jahan tumhara website ka saara code store hota hai — socho isko ek <strong>online folder</strong> ki tarah jahan tumhari website ki saari files rehti hain.' },
          { type: 'text', content: '<strong>Step 1:</strong> Browser mein jao <code>github.com</code>' },
          { type: 'text', content: '<strong>Step 2:</strong> Upar right corner mein <strong>"Sign Up"</strong> button dikhega — click karo' },
          { type: 'text', content: '<strong>Step 3:</strong> Ab ye cheezein fill karo:' },
          { type: 'list', content: '<strong>Email</strong> — wahi Gmail dalo jo Claude mein use ki thi\n<strong>Password</strong> — ek strong password banao\n<strong>Username</strong> — ye tumhara GitHub name hoga jo duniya dekhegi\nExample: <code>utkarsh-dev</code> ya <code>utkarsh-codes</code>\nSpaces nahi hone chahiye, use karo <code>-</code> (dash)' },
          { type: 'text', content: '<strong>Step 4:</strong> GitHub ek <strong>puzzle/captcha</strong> solve karayega — solve karo' },
          { type: 'text', content: '<strong>Step 5:</strong> GitHub tumhari email par ek <strong>verification code</strong> bhejega — wo code daal do' },
          { type: 'text', content: '<strong>Step 6:</strong> Kuch basic questions poochega jaise:' },
          { type: 'list', content: '<em>"How many team members?"</em> → Select <strong>"Just me"</strong>\n<em>"Are you a student?"</em> → Select <strong>"Student"</strong>\nFree plan select karo — <strong>"Continue for free"</strong>' },
          { type: 'text', content: '<strong>Congratulations!</strong> GitHub account ready hai!' },
        ]
      },
      {
        id: 'vercel-setup',
        title: 'Vercel Account Banana',
        badge: '3',
        blocks: [
          { type: 'text', content: 'Vercel wo jagah hai jo tumhari GitHub mein rakhi files ko lekar <strong>internet par live website</strong> bana deta hai — bilkul free mein!' },
          { type: 'text', content: '<strong>Step 1:</strong> Browser mein jao <code>vercel.com</code>' },
          { type: 'text', content: '<strong>Step 2:</strong> <strong>"Sign Up"</strong> par click karo' },
          { type: 'text', content: '<strong>Step 3:</strong> Yahan tumhe option milega — <strong>"Continue with GitHub"</strong> — isko click karo' },
          { type: 'warning', content: '<strong>Bahut zaroori:</strong> Vercel mein <strong>wahi GitHub account use karo</strong> jo abhi banaya hai. Isliye dono mein same Gmail use karna zaroori tha!' },
          { type: 'text', content: '<strong>Step 4:</strong> GitHub tumse poochega — <em>"Vercel ko permission dein?"</em> — <strong>"Authorize Vercel"</strong> par click karo' },
          { type: 'text', content: '<strong>Step 5:</strong> Vercel ka dashboard khul jayega — kuch aisa dikhega:' },
          { type: 'code', language: 'text', content: '"Welcome to Vercel! Let\'s deploy something."' },
          { type: 'text', content: '<strong>Congratulations!</strong> Vercel bhi ready hai!' },
        ]
      },
      {
        id: 'recap',
        title: 'Part 1 Complete! Quick Recap',
        blocks: [
          { type: 'table', headers: ['Website', 'Kaam', 'Status'], rows: [['claude.ai', 'Code banayega', 'Ready'], ['github.com', 'Code store karega', 'Ready'], ['vercel.com', 'Website live karega', 'Ready']] },
          { type: 'warning', content: '<strong>Sabse important baat yaad rakho:</strong> Teeno jagah <strong>same Gmail</strong> use karna — isse aage ka kaam bahut aasaan ho jayega!' },
        ]
      }
    ]
  },
  {
    number: 2,
    id: 'part-2',
    title: 'Website Ka Plan Kaise Banayein',
    subtitle: 'Claude AI se pehle planning karna seekho — seedha code maangne se behtar',
    eyebrow: 'PART 02',
    sections: [
      {
        id: 'why-planning',
        title: 'Planning Kyun Zaroori Hai?',
        blocks: [
          { type: 'text', content: '<strong>Ye part sabse important hai poore guide mein!</strong> Bahut log seedha code maangne lagte hain Claude se — aur phir result bakwaas aata hai. Isliye pehle <strong>planning</strong> karni padti hai. Ek accha plan = ek accha website!' },
          { type: 'text', content: 'Socho tum ek ghar banana chahte ho — kya tum seedha eet (bricks) uthake rakhne lagoge? <strong>Nahi na?</strong>' },
          { type: 'text', content: 'Pehle architect se <strong>naksha</strong> banwate ho — kitne rooms, kahan bathroom, kahan kitchen — sab pehle decide hota hai.' },
          { type: 'text', content: 'Website bhi same hai:' },
          { type: 'list', content: 'Pehle <strong>socho</strong> kya chahiye\nPhir <strong>plan</strong> banao\nPhir <strong>code</strong> maango' },
          { type: 'text', content: 'Agar plan nahi banaya toh Claude adha-adhoora ya galat website banayega — aur tumhe samajh bhi nahi aayega kahan galti hui.' },
        ]
      },
      {
        id: 'step-1-questions',
        title: 'Step 1: Apne Aap Se Ye Questions Poochho',
        badge: '1',
        blocks: [
          { type: 'text', content: 'Claude ko prompt dene se <strong>pehle</strong> khud ye sab decide karo:' },
          { type: 'list', content: 'Website kis cheez ke baare mein hai? (Portfolio? Business? Blog? Tool?)\nWebsite kaun dekhega? (Students? Customers? Everyone?)\nWebsite mein kya kya hoga? (Pages? Buttons? Forms? Gallery?)\nWebsite kaisa dikhna chahiye? (Simple? Colorful? Professional? Minimal?)\nKoi special feature chahiye? (Contact form? Dark mode? Animation?)' },
          { type: 'tip', content: '<strong>Tip:</strong> Ye answers ek kagaz par likh lo pehle — phir Claude ko doge toh response bahut better aayega!' },
        ]
      },
      {
        id: 'step-2-share-idea',
        title: 'Step 2: Claude Ko Pehla Prompt Do',
        badge: '2',
        blocks: [
          { type: 'text', content: 'Seedha code mat maango! Pehle Claude se <strong>apni website ka idea discuss karo.</strong>' },
          { type: 'subheading', content: 'Prompt 1 — Website Ka Idea Share Karo:' },
          { type: 'prompt', content: 'I want to create a website. Let me tell you my idea and you help me plan it properly before we write any code.\nMy idea: [YAHAN APNA IDEA LIKHO]\nTarget audience: [YAHAN LIKHO KAUN DEKHEGA]\nPlease ask me questions to understand my requirements better before planning.' },
          { type: 'subheading', content: 'Example — agar portfolio website banana hai:' },
          { type: 'prompt', content: 'I want to create a website. Let me tell you my idea and you help me plan it properly before we write any code.\nMy idea: A portfolio website for myself. I am a student who knows AI tools and wants to showcase my projects and skills to get freelance clients.\nTarget audience: Freelance clients, recruiters, and people who want websites made.\nPlease ask me questions to understand my requirements better before planning.' },
          { type: 'text', content: 'Claude ab tumse sawal poochega — <strong>sabka jawab do!</strong> Jitna detail doge, utna better plan banega.' },
        ]
      },
      {
        id: 'step-3-plan',
        title: 'Step 3: Claude Se Proper Plan Banwao',
        badge: '3',
        blocks: [
          { type: 'text', content: 'Jab Claude ke saare questions answer ho jayein, tab ye prompt do:' },
          { type: 'subheading', content: 'Prompt 2 — Full Plan Maango:' },
          { type: 'prompt', content: 'Based on our discussion, now create a detailed plan for my website with the following:\n1. List of all pages needed\n2. What content goes on each page\n3. What sections each page will have\n4. Color scheme suggestion\n5. Font style suggestion (professional/playful/minimal)\n6. List of all files that will be needed (HTML, CSS, JS files — name them all)\n7. Any special features or animations\nPresent this as a clear structured plan.\nDo not write any code yet.' },
          { type: 'warning', content: '<strong>"Do not write any code yet"</strong> — ye likhna bahut zaroori hai! Warna Claude seedha code dene lagta hai aur plan skip ho jaata hai.' },
        ]
      },
      {
        id: 'step-4-confirm',
        title: 'Step 4: Plan Ko Confirm Karo',
        badge: '4',
        blocks: [
          { type: 'text', content: 'Claude plan dega — use <strong>dhyan se padho.</strong> Phir ye prompt do:' },
          { type: 'subheading', content: 'Prompt 3 — Plan Review Karo:' },
          { type: 'prompt', content: 'This plan looks [good/I have some changes].\nChanges I want:\n- [Change 1]\n- [Change 2]\nPlease update the plan and confirm the final version.\nAfter this we will start making the website.' },
          { type: 'text', content: '<strong>Agar plan bilkul sahi laga toh:</strong>' },
          { type: 'prompt', content: 'This plan looks perfect. Please confirm the final plan in a clean format. After your confirmation we will start building the website step by step.' },
        ]
      },
      {
        id: 'step-5-files',
        title: 'Step 5: File Structure Confirm Karo',
        badge: '5',
        blocks: [
          { type: 'text', content: 'Ye ek <strong>extra important step</strong> hai jo log skip kar dete hain!' },
          { type: 'subheading', content: 'Prompt 4 — File List Pakki Karo:' },
          { type: 'prompt', content: 'Now based on the final plan, give me the exact list of all files we will create for this website.\nFor each file tell me:\n1. File name (exactly)\n2. What this file does\n3. Which other files it connects to\nPresent it like a tree structure.' },
          { type: 'text', content: 'Claude kuch aisa dega:' },
          { type: 'code', language: 'text', content: 'My Website\n├── index.html        → Main homepage\n├── about.html        → About page\n├── projects.html     → Projects page\n├── contact.html      → Contact page\n├── style.css         → All styling for all pages\n└── script.js         → All animations and effects' },
          { type: 'tip', content: '<strong>Ye list apne notebook mein likh lo ya screenshot lo</strong> — aage bahut kaam aayegi!' },
        ]
      },
      {
        id: 'recap',
        title: 'Part 2 Complete! Quick Recap',
        blocks: [
          { type: 'table', headers: ['Step', 'Kya Kiya', 'Prompt'], rows: [['Step 1', 'Khud decide kiya kya chahiye', 'No prompt — self thinking'], ['Step 2', 'Claude ko idea share kiya', 'Prompt 1'], ['Step 3', 'Full plan banwaya', 'Prompt 2'], ['Step 4', 'Plan review aur confirm kiya', 'Prompt 3'], ['Step 5', 'File list pakki ki', 'Prompt 4']] },
          { type: 'warning', content: '<strong>Golden Rule of This Guide:</strong> <em>"Pehle socho, phir plan karo, phir code karo"</em> — Ye teen steps follow karo — tumhari website hamesha achi banegi!' },
        ]
      }
    ]
  },
  {
    number: 3,
    id: 'part-3',
    title: 'Website Ki Files Ko Samjho — Bilkul Bachche Ki Tarah!',
    subtitle: 'HTML, CSS, aur JavaScript kaam kaise karte hain — asaan bhasa mein',
    eyebrow: 'PART 03',
    sections: [
      {
        id: 'story',
        title: 'Pehle Ek Kahani Suno',
        blocks: [
          { type: 'text', content: 'Socho tumhare ghar mein ek <strong>kamra</strong> hai. Us kamre mein 3 cheezein hain:' },
          { type: 'list', content: '<strong>Deewarein aur furniture</strong> — ye batata hai kamre mein <strong> KYA hai</strong>\n<strong>Paint aur decoration</strong> — ye batata hai kamre ko <strong>KAISA dikhna chahiye</strong>\n<strong>Bijli aur switches</strong> — ye batata hai kamra <strong>KAISE kaam karta hai</strong>' },
          { type: 'text', content: '<strong>Website bilkul aise hi hoti hai!</strong>' },
          { type: 'table', headers: ['Ghar', 'Website', 'Kaam'], rows: [['Deewarein + Furniture', 'index.html', 'Website mein KYA hai — text, buttons, images'], ['Paint + Decoration', 'style.css', 'Website KAISI dikhti hai — colors, fonts, size'], ['Bijli + Switches', 'script.js', 'Website KAISE kaam karti hai — animations, clicks']] },
        ]
      },
      {
        id: 'html',
        title: 'HTML File Kya Hoti Hai?',
        badge: 'HTML',
        blocks: [
          { type: 'text', content: '<strong>HTML = HyperText Markup Language</strong>' },
          { type: 'text', content: 'Seedha simple mein: <strong>HTML wo file hai jo batati hai website par KYA likha hai aur KYA hai.</strong>' },
          { type: 'text', content: 'Jaise ek blank kagaz par tum likhte ho: Yahan heading hogi, Yahan ek button hoga, Yahan ek image hogi, Yahan paragraph hoga. HTML exactly yahi karta hai — <strong>structure banata hai.</strong>' },
          { type: 'subheading', content: 'HTML kaisa dikhta hai andar se:' },
          { type: 'code', language: 'html', content: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Meri Pehli Website</title>\n</head>\n<body>\n  <h1>Namaste! Main Utkarsh Hun</h1>\n  <p>Main ek student hun jo websites banata hai.</p>\n  <button>Mujhse Contact Karo</button>\n</body>\n</html>' },
          { type: 'tip', content: '<strong>Ye mat socho ki ye yaad karna hai!</strong> Bas itna samjho ki HTML = website ka <strong>skeleton</strong> (haddiyan). Jaise body mein haddiyan hoti hain — dikhti nahi par sab kuch unpe tika hota hai!' },
        ]
      },
      {
        id: 'css',
        title: 'CSS File Kya Hoti Hai?',
        badge: 'CSS',
        blocks: [
          { type: 'text', content: '<strong>CSS = Cascading Style Sheets</strong>' },
          { type: 'text', content: 'Seedha simple mein: <strong>CSS wo file hai jo batati hai website KAISI dikhegi.</strong>' },
          { type: 'text', content: 'HTML ne banaya ek button — <strong>CSS decide karta hai:</strong>' },
          { type: 'list', content: 'Button ka color kya hoga? (Blue? Red? Green?)\nButton kitna bada hoga?\nButton ke corners round honge ya sharp?\nText ka font kya hoga?' },
          { type: 'subheading', content: 'CSS kaisa dikhta hai andar se:' },
          { type: 'code', language: 'css', content: 'h1 {\n  color: blue;\n  font-size: 40px;\n}\np {\n  color: gray;\n  font-size: 16px;\n}\nbutton {\n  background-color: blue;\n  color: white;\n  border-radius: 10px;\n  padding: 10px 20px;\n}' },
          { type: 'text', content: '<strong>Aise socho:</strong> HTML ne kaha — <em>"Yahan ek button hai"</em>. CSS ne kaha — <em>"Wo button blue hoga, round corners ke saath, aur white text ke saath"</em>.' },
          { type: 'text', content: '<strong>HTML = Kya hai | CSS = Kaisa dikhta hai</strong>' },
        ]
      },
      {
        id: 'js',
        title: 'JS File Kya Hoti Hai?',
        badge: 'JS',
        blocks: [
          { type: 'text', content: '<strong>JS = JavaScript</strong>' },
          { type: 'text', content: 'Seedha simple mein: <strong>JS wo file hai jo website ko "zinda" banati hai — matlab kuch HOTA hai jab tum kuch karo.</strong>' },
          { type: 'text', content: 'Jaise:' },
          { type: 'list', content: 'Button dabaya → kuch pop up hua\nPage khula → animation chali\nForm bhara → message aaya' },
          { type: 'subheading', content: 'JS kaisa dikhta hai andar se:' },
          { type: 'code', language: 'javascript', content: 'button.addEventListener("click", function() {\n  alert("Tumne button dabaya!");\n});' },
          { type: 'text', content: '<strong>Aise socho:</strong> Ghar mein switch dabate ho → light jalti hai. Website mein button dabate ho → JS kuch karta hai.' },
          { type: 'text', content: '<strong>JS = Website ki "reactions"</strong>' },
        ]
      },
      {
        id: 'single-file',
        title: 'Type 1 — Single File Website (Sab Ek Jagah)',
        blocks: [
          { type: 'text', content: 'Isme <strong>sirf ek hi file</strong> hoti hai — <code>index.html</code>. Aur us ek file ke <strong>andar hi</strong> CSS aur JS bhi likh dete hain!' },
          { type: 'subheading', content: 'Aise dikhta hai:' },
          { type: 'code', language: 'html', content: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Meri Website</title>\n  <!-- CSS ANDAR HI LIKH DI -->\n  <style>\n    h1 { color: blue; }\n    button { background: green; }\n  </style>\n</head>\n<body>\n  <h1>Namaste!</h1>\n  <button onclick="hello()">Click Karo</button>\n  <!-- JS BHI ANDAR HI LIKH DI -->\n  <script>\n    function hello() {\n      alert("Hello!");\n    }\n  </script>\n</body>\n</html>' },
          { type: 'subheading', content: 'Fayde:' },
          { type: 'list', content: 'Sirf ek file — manage karna aasaan\nSeedha Netlify par drag & drop karke deploy ho jaata hai\nChhoti simple websites ke liye perfect' },
          { type: 'subheading', content: 'Nuksan:' },
          { type: 'list', content: 'Badi website ke liye ye file bahut lamba ho jaati hai\nDhundhna mushkil ho jaata hai ki kahan kya likha hai' },
          { type: 'tip', content: '<strong>Kab use karein:</strong> Jab website chhoti ho — jaise ek simple landing page, ek calculator, ek quiz app' },
        ]
      },
      {
        id: 'multiple-file',
        title: 'Type 2 — Multiple File Website (Sab Alag Alag)',
        blocks: [
          { type: 'text', content: 'Isme <strong>teen ya zyada files</strong> hoti hain — sab ka alag kaam:' },
          { type: 'code', language: 'text', content: 'Meri Website\n├── index.html       → Homepage\n├── about.html       → About page\n├── projects.html    → Projects page\n├── style.css        → Saari styling\n└── script.js        → Saare effects' },
          { type: 'text', content: '<strong>HTML file CSS ko aise bulati hai:</strong>' },
          { type: 'code', language: 'html', content: '<link rel="stylesheet" href="style.css">' },
          { type: 'text', content: '<strong>HTML file JS ko aise bulati hai:</strong>' },
          { type: 'code', language: 'html', content: '<script src="script.js"></script>' },
          { type: 'tip', content: '<strong>Aise socho:</strong> Single file = Sab kuch ek hi dabba mein. Multiple file = Kapde, khaana, books — sab alag alag dabbe mein — organized!' },
          { type: 'subheading', content: 'Fayde:' },
          { type: 'list', content: 'Organized rehta hai — CSS alag, JS alag\nBadi websites ke liye perfect\nProfessional websites aise hi banti hain' },
          { type: 'subheading', content: 'Nuksan:' },
          { type: 'list', content: 'Files ko aapas mein <strong>sahi se connect</strong> karna padta hai\nLocal preview nahi dekh sakte — Vercel par deploy karke dekhna padta hai' },
          { type: 'tip', content: '<strong>Kab use karein:</strong> Jab website mein multiple pages hon, professional look chahiye, ya koi badi project ho' },
        ]
      },
      {
        id: 'comparison',
        title: 'Dono Ka Comparison — Ek Nazar Mein',
        blocks: [
          { type: 'table', headers: ['Cheez', 'Single File', 'Multiple File'], rows: [['Files kitni', 'Sirf 1', '3 ya zyada'], ['Manage karna', 'Aasaan', 'Thoda complex'], ['Preview karna', 'Browser mein seedha kholo', 'Vercel par deploy karo'], ['Deploy karna', 'Netlify drag & drop', 'Vercel + GitHub'], ['Kaisi websites', 'Chhoti, simple', 'Badi, professional'], ['Beginners ke liye', 'Bahut aasaan', 'Is guide mein sikhenge']] },
        ]
      },
      {
        id: 'recap',
        title: 'Part 3 Complete! Ek Line Mein Yaad Karo',
        blocks: [
          { type: 'list', content: '<strong>HTML</strong> = Website ka <strong>dhancha</strong> (kya hai)\n<strong>CSS</strong> = Website ki <strong>sundarta</strong> (kaisi dikhti hai)\n<strong>JS</strong> = Website ki <strong>jaan</strong> (kaise kaam karti hai)\n<strong>Single File</strong> = Sab ek mein — simple websites\n<strong>Multiple File</strong> = Sab alag alag — professional websites' },
        ]
      }
    ]
  },
  {
    number: 4,
    id: 'part-4',
    title: 'Apni Zaroorat Samjho — Single Ya Multiple File Website?',
    subtitle: 'Apni website ke liye sahi type kaise chunein',
    eyebrow: 'PART 04',
    sections: [
      {
        id: 'question',
        title: 'Pehle Ek Simple Sawaal Poochho Khud Se',
        blocks: [
          { type: 'text', content: '<strong>"Meri website mein kitne pages honge?"</strong>' },
          { type: 'text', content: 'Bas itna socho — aur answer tumhare paas aa jayega!' },
        ]
      },
      {
        id: 'single-file-when',
        title: 'Single File Website Kab Banao?',
        blocks: [
          { type: 'text', content: 'Agar tumhari website mein <strong>sirf EK page</strong> hai — toh single file website banao!' },
          { type: 'subheading', content: 'Single File ke Examples:' },
          { type: 'list', content: '<strong>Calculator</strong> — Sirf ek page, numbers daalo, answer aaye\n<strong>Timer/Stopwatch</strong> — Sirf ek page, start stop karo\n<strong>Quiz App</strong> — Sirf ek page, questions aate jaate hain\n<strong>Weather App</strong> — Sirf ek page, city daalo weather dekho\n<strong>Landing Page</strong> — Sirf ek page, koi product ya service batao\n<strong>Simple Portfolio</strong> — Sirf ek page, scroll karte jao' },
          { type: 'subheading', content: 'Ek Aur Simple Test:' },
          { type: 'text', content: 'Poochho khud se — <em>"Kya meri website mein koi menu hoga jahan click karke DOOSRE PAGE par jaayein?"</em>' },
          { type: 'list', content: '<strong>Nahi</strong> → Single File Website banao\n<strong>Haan</strong> → Multiple File Website banao' },
        ]
      },
      {
        id: 'multiple-file-when',
        title: 'Multiple File Website Kab Banao?',
        blocks: [
          { type: 'text', content: 'Agar tumhari website mein <strong>2 ya zyada pages</strong> hain — toh multiple file website banao!' },
          { type: 'subheading', content: 'Multiple File ke Examples:' },
          { type: 'list', content: '<strong>Professional Portfolio</strong> — Home, About, Projects, Contact — 4 pages\n<strong>Small Business Website</strong> — Home, Services, Gallery, Contact — 4 pages\n<strong>Blog Website</strong> — Home, Posts, About, Contact — 4+ pages\n<strong>Course Website</strong> — Home, Curriculum, About, Enroll — 4 pages\n<strong>Fitness Website</strong> — Home, Programs, Trainer, Contact — 4 pages' },
        ]
      },
      {
        id: 'chart',
        title: 'Confusion Ho Raha Hai? Ye Chart Dekho!',
        blocks: [
          { type: 'code', language: 'text', content: 'Apni website ke baare mein socho...\n        |\n        ▼\nKitne pages chahiye?\n        |\n  ───────────────\n  |              |\nSirf 1      2 ya zyada\npage             pages\n  |              |\n  ▼              ▼\nSINGLE       MULTIPLE\nFILE          FILE\nWebsite       Website\n  |              |\n  ▼              ▼\nNetlify      Vercel\nse deploy    se deploy\nkaro         karo' },
        ]
      },
      {
        id: 'cases',
        title: 'Real Life Mein Kaise Decide Karein?',
        blocks: [
          { type: 'subheading', content: 'Case 1 — Riya Ka Case:' },
          { type: 'text', content: '<em>"Main ek simple calculator banana chahti hun jisme sirf numbers daalo aur result aaye"</em>' },
          { type: 'text', content: '<strong>Single File</strong> — Sirf ek kaam, sirf ek page, single file perfect hai!' },
          { type: 'subheading', content: 'Case 2 — Arjun Ka Case:' },
          { type: 'text', content: '<em>"Main apna portfolio banana chahta hun jisme Home page ho, About page ho, Projects page ho aur Contact page ho"</em>' },
          { type: 'text', content: '<strong>Multiple File</strong> — 4 pages hain, multiple file banana padega!' },
          { type: 'subheading', content: 'Case 3 — Sneha Ka Case:' },
          { type: 'text', content: '<em>"Main ek landing page banana chahti hun apne bakery ke liye — sirf ek page jisme saari info ho"</em>' },
          { type: 'text', content: '<strong>Single File</strong> — Sirf ek page hai, single file kafi hai!' },
          { type: 'subheading', content: 'Case 4 — Rahul Ka Case:' },
          { type: 'text', content: '<em>"Main ek website banana chahta hun jisme Home ho, Services ho, aur Contact form ho"</em>' },
          { type: 'text', content: '<strong>Multiple File</strong> — Multiple sections alag pages pe hain, multiple file better rahegi!' },
        ]
      },
      {
        id: 'both-types',
        title: 'Ek Aur Important Baat — "Mujhe Dono Chahiye"',
        blocks: [
          { type: 'text', content: 'Kabhi kabhi log kehte hain — <em>"Main ek portfolio banana chahta hun par chhota sa — sirf ek page par sab kuch"</em>' },
          { type: 'text', content: '<strong>Ye bilkul possible hai!</strong> Single file mein bhi tum <strong>sections</strong> bana sakte ho:' },
          { type: 'code', language: 'text', content: 'Single File mein bhi ho sakta hai:\n─────────────────────────────\n|  Home Section              |\n|  About Section             |\n|  Projects Section          |\n|  Contact Section           |\n─────────────────────────────\nSab ek hi page par — scroll karo aur sab dekho!' },
          { type: 'tip', content: '<strong>Ye professional websites mein bahut common hai!</strong> Ek hi page par sab kuch hota hai — upar se neeche scroll karte jao. Isko <strong>"One Page Website"</strong> kehte hain — aur ye single file mein banta hai!' },
        ]
      },
      {
        id: 'final-decision',
        title: 'Final Decision Kaise Lo?',
        blocks: [
          { type: 'text', content: '<strong>Ye 3 Questions Poochho Khud Se:</strong>' },
          { type: 'text', content: '<strong>Question 1:</strong> Kya user ko ALAG ALAG pages par jaana hoga? (Jaise Home → About → Projects → Contact)' },
          { type: 'text', content: 'Haan → Multiple File | Nahi → Single File' },
          { type: 'text', content: '<strong>Question 2:</strong> Kya website mein 5 se zyada badi sections hain?' },
          { type: 'text', content: 'Haan → Multiple File sochna chahiye | Nahi → Single File theek hai' },
          { type: 'text', content: '<strong>Question 3:</strong> Kya ye ek professional business/portfolio website hai jo impressive lagni chahiye?' },
          { type: 'text', content: 'Haan → Multiple File | Nahi → Single File bhi kafi hai' },
        ]
      },
      {
        id: 'what-we-build',
        title: 'Is Guide Mein Hum Kya Banayenge?',
        blocks: [
          { type: 'text', content: '<strong>Is guide ka main focus = Multiple File Website</strong> — Kyunki ye professional hai, isme zyada seekhne ko milega, aur Vercel par deploy karenge — bilkul free mein!' },
          { type: 'text', content: '<strong>Single File ke liye = Netlify use karenge</strong> — Wo process Part 9 mein cover karenge — drag & drop se deploy hoti hai — bahut aasaan!' },
        ]
      },
      {
        id: 'recap',
        title: 'Part 4 Complete! Ek Line Mein Yaad Karo',
        blocks: [
          { type: 'list', content: '<strong>Single File</strong> = Sirf 1 page → <strong>Netlify</strong> se deploy\n<strong>Multiple File</strong> = 2+ pages → <strong>Vercel</strong> se deploy\n<strong>Confused ho?</strong> → Poochho <em>"Kitne pages chahiye?"</em> — answer mil jayega!' },
        ]
      }
    ]
  }
];

courseParts.push(
  {
    number: 5,
    id: 'part-5',
    title: 'Claude Se Website Ki Files Kaise Banwao?',
    subtitle: 'Ek ek file, step by step — Claude se code kaise banwayein',
    eyebrow: 'PART 05',
    sections: [
      {
        id: 'important-note',
        title: 'Sabse Pehle Ek Zaroori Baat',
        blocks: [
          { type: 'warning', content: '<strong>Claude ek baar mein poori website nahi banata — ek ek file banwao!</strong>' },
          { type: 'text', content: 'Bahut log galti karte hain — ek hi prompt mein poori website maang lete hain:' },
          { type: 'subheading', content: 'Galat tarika:' },
          { type: 'prompt', content: '"Make me a complete portfolio website with all pages and all files"' },
          { type: 'text', content: 'Iska result hoga — <strong>adhoori, buggy, aur confusing code!</strong>' },
          { type: 'subheading', content: 'Sahi tarika:' },
          { type: 'code', language: 'text', content: 'Pehle index.html → phir about.html →\nphir style.css → phir script.js\nEk ek file — step by step!' },
          { type: 'tip', content: '<strong>Kyun?</strong> Kyunki Claude ka ek conversation mein limited memory hoti hai. Ek file par focus karo — better result aayega!' },
        ]
      },
      {
        id: 'use-plan',
        title: 'Shuru Karne Se Pehle — Part 2 Ka Plan Nikaalo',
        blocks: [
          { type: 'text', content: 'Yaad hai Part 2 mein humne ek <strong>file list</strong> banwayi thi? Jaise:' },
          { type: 'code', language: 'text', content: 'My Portfolio Website\n├── index.html        → Homepage\n├── about.html        → About page\n├── projects.html     → Projects page\n├── contact.html      → Contact page\n├── style.css         → All styling\n└── script.js         → All effects' },
          { type: 'text', content: '<strong>Ye list apne saamne rakh lo</strong> — iske hisaab se ek ek file banwayenge!' },
        ]
      },
      {
        id: 'step-1-context',
        title: 'Step 1: Claude Ko Poora Context Do',
        badge: '1',
        blocks: [
          { type: 'text', content: 'Har naye conversation mein Claude ko <strong>pehle sab kuch batao</strong> — warna wo bhool jaata hai!' },
          { type: 'subheading', content: 'Prompt 1 — Context Setting:' },
          { type: 'prompt', content: 'I am building a [WEBSITE TYPE] website.\nHere is my complete plan:\nWebsite Name: [NAME]\nPurpose: [WHAT IS THIS WEBSITE FOR]\nTarget Audience: [WHO WILL SEE IT]\nPages:\n- index.html → [WHAT IS ON THIS PAGE]\n- about.html → [WHAT IS ON THIS PAGE]\n- projects.html → [WHAT IS ON THIS PAGE]\n- contact.html → [WHAT IS ON THIS PAGE]\nStyling: [COLOR SCHEME + FONT STYLE]\nFiles needed:\n- index.html, about.html, projects.html, contact.html, style.css, script.js\nWe will build this one file at a time.\nFirst confirm you understand the complete plan.\nDo not write any code yet.' },
          { type: 'subheading', content: 'Example — Portfolio Website ke liye:' },
          { type: 'prompt', content: 'I am building a portfolio website for myself.\nHere is my complete plan:\nWebsite Name: Utkarsh\'s Portfolio\nPurpose: Showcase my AI skills and projects to get freelance clients\nTarget Audience: Freelance clients and recruiters\nPages:\n- index.html → Hero section, intro, skills overview\n- about.html → My story, education, certificates\n- projects.html → All my projects with descriptions\n- contact.html → Contact form and social links\nStyling: Dark theme, blue accent color, modern and professional look\nFiles needed:\n- index.html, about.html, projects.html, contact.html, style.css, script.js\nWe will build this one file at a time.\nFirst confirm you understand the complete plan.\nDo not write any code yet.' },
          { type: 'text', content: 'Claude confirm karega — tab aage badho!' },
        ]
      },
      {
        id: 'step-2-css',
        title: 'Step 2: Pehli File Banwao — style.css',
        badge: '2',
        blocks: [
          { type: 'text', content: '<strong>Hamesha CSS pehle banwao!</strong> Kyunki jab HTML files banegi toh CSS already ready hogi — sab kuch connected rahega!' },
          { type: 'subheading', content: 'Prompt 2 — CSS File Maango:' },
          { type: 'prompt', content: 'Now create the complete style.css file for our website.\nMake sure it includes styling for:\n1. General styles (body, fonts, colors)\n2. Navigation bar\n3. Buttons\n4. Headings and paragraphs\n5. Cards (for projects section)\n6. Contact form\n7. Footer\n8. Mobile responsive (works on phone also)\n9. Smooth hover effects on buttons and links\nColor scheme: [APNA COLOR SCHEME LIKHO]\nFont: Use Google Fonts — [FONT NAME] or choose a good professional one\nWrite the complete style.css file.' },
          { type: 'tip', content: '<strong>Jab Claude CSS dega</strong> — use <strong>poora copy karo</strong> aur ek jagah save karo. Notepad ya Google Docs mein paste kar lo — kaam aayega!' },
        ]
      },
      {
        id: 'step-3-homepage',
        title: 'Step 3: Homepage Banwao — index.html',
        badge: '3',
        blocks: [
          { type: 'subheading', content: 'Prompt 3 — index.html Maango:' },
          { type: 'prompt', content: 'Now create the index.html file.\nThis is the homepage and it should have:\n1. Navigation bar with links to all pages (Home, About, Projects, Contact)\n2. Hero section — big heading, short intro line, and a CTA button\n3. Skills section — show my top skills with icons or cards\n4. Brief about preview — 2-3 lines about me with a "Read More" button linking to about.html\n5. Footer — name, social links\nImportant rules:\n- Link style.css properly at the top\n- Link script.js properly at the bottom\n- All navigation links should go to correct pages (about.html, projects.html, contact.html)\n- Write complete working code only\nWrite the complete index.html file now.' },
        ]
      },
      {
        id: 'step-4-pages',
        title: 'Step 4: Baaki Pages Banwao',
        badge: '4',
        blocks: [
          { type: 'text', content: 'Same tarike se ek ek page banwao — har baar naya prompt do!' },
          { type: 'subheading', content: 'Prompt 4 — about.html Maango:' },
          { type: 'prompt', content: 'Now create the about.html file.\nThis page should have:\n1. Same navigation bar as index.html\n2. My photo placeholder (use a div with background color if no image)\n3. My story section — who I am, what I do\n4. Education section\n5. Certificates section (Deloitte and Microsoft)\n6. Skills with progress bars or icons\n7. Same footer as index.html\nImportant rules:\n- Link style.css properly\n- Link script.js properly\n- Navigation links should work correctly\n- Write complete working code only\nWrite the complete about.html file now.' },
          { type: 'subheading', content: 'Prompt 5 — projects.html Maango:' },
          { type: 'prompt', content: 'Now create the projects.html file.\nThis page should have:\n1. Same navigation bar\n2. Page heading — "My Projects"\n3. Project cards — each card should have:\n   - Project name\n   - Short description\n   - Technologies used tags\n   - A "View Project" button\n4. Make at least 3 sample project cards (I will edit the content later)\n5. Same footer\nImportant rules:\n- Link style.css properly\n- Link script.js properly\n- Navigation links correct\n- Write complete working code only\nWrite the complete projects.html file now.' },
          { type: 'subheading', content: 'Prompt 6 — contact.html Maango:' },
          { type: 'prompt', content: 'Now create the contact.html file.\nThis page should have:\n1. Same navigation bar\n2. Contact form with fields:\n   - Name\n   - Email\n   - Subject\n   - Message\n   - Submit button\n3. My contact info section:\n   - Email address placeholder\n   - LinkedIn link placeholder\n   - GitHub link placeholder\n4. Same footer\nImportant rules:\n- Link style.css properly\n- Link script.js properly\n- Navigation links correct\n- Form should look clean and working\n- Write complete working code only\nWrite the complete contact.html file now.' },
        ]
      },
      {
        id: 'step-5-js',
        title: 'Step 5: JavaScript File Banwao',
        badge: '5',
        blocks: [
          { type: 'subheading', content: 'Prompt 7 — script.js Maango:' },
          { type: 'prompt', content: 'Now create the script.js file.\nAdd these features:\n1. Smooth scrolling for all links\n2. Navigation bar — add shadow when user scrolls down\n3. Fade in animation when page loads\n4. Project cards — hover effect (slight lift up)\n5. Contact form — when submitted show a thank you message\n6. Mobile menu — hamburger menu that opens and closes\nWrite the complete script.js file now.' },
        ]
      },
      {
        id: 'step-6-verify',
        title: 'Step 6: Saari Files Ka Quick Check',
        badge: '6',
        blocks: [
          { type: 'text', content: 'Jab saari files ban jaayein — ye prompt do:' },
          { type: 'subheading', content: 'Prompt 8 — Files Verify Karo:' },
          { type: 'prompt', content: 'We have created all these files:\n- index.html\n- about.html\n- projects.html\n- contact.html\n- style.css\n- script.js\nPlease confirm:\n1. Are all navigation links correct in all HTML files?\n2. Is style.css linked in all HTML files?\n3. Is script.js linked in all HTML files?\n4. Is there anything missing or any obvious errors?\nList any issues found.' },
        ]
      },
      {
        id: 'save-files',
        title: 'Apni Files Kahan Save Karein?',
        blocks: [
          { type: 'text', content: 'Abhi tak humne Claude se code liya — par save kahan karein?' },
          { type: 'text', content: '<strong>Ye karo:</strong>' },
          { type: 'list', content: '<strong>Step 1:</strong> Apne computer mein ek naya folder banao. Name: "my-website" ya kuch bhi\n<strong>Step 2:</strong> Har file ke liye: Notepad ya VS Code kholo, Claude ka code paste karo, Sahi naam se save karo\n<strong>Step 3:</strong> Saari files <strong>EK HI FOLDER</strong> mein honi chahiye!' },
          { type: 'warning', content: '<strong>Bahut zaroori:</strong> Saari files <strong>ek hi folder</strong> mein rakho — warna kuch kaam nahi karega!' },
          { type: 'subheading', content: 'Folder Kaisa Dikhna Chahiye:' },
          { type: 'code', language: 'text', content: 'my-website\n├── index.html\n├── about.html\n├── projects.html\n├── contact.html\n├── style.css\n└── script.js' },
          { type: 'text', content: '<strong>Bilkul aisa dikhna chahiye — sab ek folder mein!</strong>' },
        ]
      },
      {
        id: 'recap',
        title: 'Part 5 Complete! Quick Recap',
        blocks: [
          { type: 'table', headers: ['Step', 'Kya Kiya', 'Prompt'], rows: [['Step 1', 'Claude ko poora context diya', 'Prompt 1'], ['Step 2', 'CSS file banwayi', 'Prompt 2'], ['Step 3', 'Homepage banwaya', 'Prompt 3'], ['Step 4', 'Baaki pages banwaye', 'Prompt 4,5,6'], ['Step 5', 'JavaScript banwayi', 'Prompt 7'], ['Step 6', 'Saari files verify ki', 'Prompt 8']] },
          { type: 'warning', content: '<strong>Golden Rule of This Part:</strong> <em>"Ek ek file — step by step!"</em> Kabhi ek saath poori website mat maango!' },
        ]
      }
    ]
  },
  {
    number: 6,
    id: 'part-6',
    title: 'Files Review Karo, Interlink Karo Aur Bugs Fix Karo!',
    subtitle: 'Deploy se pehle sab kuch check karna aur bugs fix karna',
    eyebrow: 'PART 06',
    sections: [
      {
        id: 'what-is-bug',
        title: 'Pehle Samjho — Bug Kya Hota Hai?',
        blocks: [
          { type: 'text', content: '<strong>Bug = Website mein koi cheez jo sahi kaam nahi karti</strong>' },
          { type: 'subheading', content: 'Common Bugs Jo Beginners Ko Milte Hain:' },
          { type: 'list', content: '<strong>Navigation link kaam nahi karta</strong> — Click kiya About par — kuch nahi hua\n<strong>CSS apply nahi ho rahi</strong> — Website bilkul plain dikhi rahi hai — koi color nahi, koi style nahi\n<strong>Page ka naam galat hai</strong> — index.Html — capital H galat hai!\n<strong>JS kaam nahi kar raha</strong> — Button dabaya — kuch nahi hua\n<strong>Ek page ka design alag dikhi raha hai</strong> — Home page acha dikhi raha — About page bilkul alag' },
          { type: 'tip', content: '<strong>Ghabrao mat!</strong> Ye bugs almost har beginner ko aate hain — aur Claude inhe fix kar sakta hai!' },
        ]
      },
      {
        id: 'step-1-check',
        title: 'Step 1: Pehle Apni Files Check Karo',
        badge: '1',
        blocks: [
          { type: 'text', content: 'GitHub par upload karne se pehle — <strong>notes app mein</strong> kholo aur ye check karo:' },
          { type: 'subheading', content: 'Har HTML File Mein Ye 2 Lines Honi Chahiye:' },
          { type: 'text', content: '<strong>CSS link — head section mein:</strong>' },
          { type: 'code', language: 'html', content: '<link rel="stylesheet" href="style.css">' },
          { type: 'text', content: '<strong>JS link — /body se pehle:</strong>' },
          { type: 'code', language: 'html', content: '<script src="script.js"></script>' },
          { type: 'subheading', content: 'Aise Check Karo:' },
          { type: 'code', language: 'text', content: 'index.html kholo — kya style.css linked hai? | kya script.js linked hai?\nabout.html kholo — kya style.css linked hai? | kya script.js linked hai?\nprojects.html kholo — kya style.css linked hai? | kya script.js linked hai?\ncontact.html kholo — kya style.css linked hai? | kya script.js linked hai?' },
          { type: 'warning', content: '<strong>Agar kisi file mein ye lines nahi hain</strong> — Claude se fix karwao!' },
        ]
      },
      {
        id: 'step-2-nav',
        title: 'Step 2: Navigation Links Check Karo',
        badge: '2',
        blocks: [
          { type: 'text', content: 'Har HTML file mein ek <strong>navigation bar</strong> hoga — us mein links honge:' },
          { type: 'code', language: 'html', content: '<a href="index.html">Home</a>\n<a href="about.html">About</a>\n<a href="projects.html">Projects</a>\n<a href="contact.html">Contact</a>' },
          { type: 'subheading', content: 'Check Karo — Har File Mein:' },
          { type: 'list', content: 'Kya Home link → index.html hai?\nKya About link → about.html hai?\nKya Projects link → projects.html hai?\nKya Contact link → contact.html hai?' },
          { type: 'warning', content: '<strong>Common Galti:</strong> Kabhi kabhi Claude likhta hai: <code>href="/about"</code> — ye galat hai. Sahi hai: <code>href="about.html"</code>. Slash wala format server par kaam karta hai par humari simple files mein nahi!' },
        ]
      },
      {
        id: 'step-3-review',
        title: 'Step 3: Claude Se Full Review Karwao',
        badge: '3',
        blocks: [
          { type: 'text', content: 'Ab Claude ke paas wapas jao aur ye karo — <strong>ek ek file ka code copy karo</strong> aur Claude ko do:' },
          { type: 'subheading', content: 'Prompt 1 — HTML File Review:' },
          { type: 'prompt', content: 'Please review this HTML file carefully and check for these issues:\n1. Is style.css linked correctly?\n2. Is script.js linked correctly?\n3. Are all navigation links correct? (They should be: index.html, about.html, projects.html, contact.html)\n4. Are there any broken or missing tags?\n5. Is there anything that would stop this page from working properly?\nHere is the code:\n[YAHAN APNA POORA HTML CODE PASTE KARO]\nList all issues found and give me the corrected complete file.' },
          { type: 'tip', content: '<strong>Ye prompt har HTML file ke liye alag alag use karo!</strong> index.html ke liye ek baar, about.html ke liye ek baar, aur aage bhi aise hi!' },
          { type: 'subheading', content: 'Prompt 2 — CSS File Review:' },
          { type: 'prompt', content: 'Please review this CSS file and check:\n1. Are all the basic elements styled? (body, navigation, buttons, headings, cards, footer, form)\n2. Is mobile responsive CSS included? (@media queries)\n3. Are there any syntax errors? (missing brackets, semicolons)\n4. Is Google Font imported at the top?\nHere is the code:\n[YAHAN APNA POORA CSS CODE PASTE KARO]\nList all issues and give me the corrected complete file.' },
          { type: 'subheading', content: 'Prompt 3 — JS File Review:' },
          { type: 'prompt', content: 'Please review this JavaScript file and check:\n1. Are there any syntax errors?\n2. Will the mobile hamburger menu work?\n3. Will the contact form submission work?\n4. Are there any functions that might cause errors?\nHere is the code:\n[YAHAN APNA POORA JS CODE PASTE KARO]\nList all issues and give me the corrected complete file.' },
        ]
      },
      {
        id: 'step-4-combined',
        title: 'Step 4: Saari Files Ek Saath Check Karwao',
        badge: '4',
        blocks: [
          { type: 'text', content: 'Jab sab alag alag review ho jaye — ek <strong>final combined check</strong> karo:' },
          { type: 'subheading', content: 'Prompt 4 — Final Combined Review:' },
          { type: 'prompt', content: 'I have these files for my website:\n- index.html\n- about.html\n- projects.html\n- contact.html\n- style.css\n- script.js\nHere are all my files one by one:\n--- index.html ---\n[CODE PASTE KARO]\n--- about.html ---\n[CODE PASTE KARO]\n--- style.css ---\n[CODE PASTE KARO]\nPlease check:\n1. Are all files properly connected to each other?\n2. Will navigation work correctly between all pages?\n3. Is the design consistent across all pages?\n4. Any missing connections?\nList all issues found.' },
          { type: 'warning', content: '<strong>Note:</strong> Ek saath bahut zyada code paste karne se Claude slow ho sakta hai — isliye pehle alag alag review karo, phir combined!' },
        ]
      },
      {
        id: 'step-5-fix',
        title: 'Step 5: Bugs Fix Karwana',
        badge: '5',
        blocks: [
          { type: 'text', content: 'Jab Claude koi bug bataye — use seedha fix karwao:' },
          { type: 'subheading', content: 'Prompt 5 — Bug Fix Karo:' },
          { type: 'prompt', content: 'You found these issues:\n[CLAUDE NE JO ISSUES BATAYE WO YAHAN LIKHO]\nPlease fix all these issues and give me the complete corrected file.\nImportant: Give me the COMPLETE file — not just the changed parts.\nI will replace my old file with this.' },
          { type: 'tip', content: '<strong>"Complete file" isliye maango</strong> kyunki agar Claude sirf thoda sa part deta hai — toh manually edit karna mushkil ho jaata hai. Poori file leke replace kar do!' },
        ]
      },
      {
        id: 'step-6-filenames',
        title: 'Step 6: Ek Aur Important Check — File Names!',
        badge: '6',
        blocks: [
          { type: 'text', content: 'Ye bahut choti baat lagti hai par <strong>bahut badi galti</strong> hai!' },
          { type: 'subheading', content: 'File Names Exactly Aisi Honi Chahiye:' },
          { type: 'text', content: '<strong>Sahi:</strong>' },
          { type: 'code', language: 'text', content: 'index.html\nabout.html\nprojects.html\ncontact.html\nstyle.css\nscript.js' },
          { type: 'text', content: '<strong>Galat:</strong>' },
          { type: 'code', language: 'text', content: 'Index.html        (capital I) ❌\nindex.HTML        (capital HTML) ❌\nabout page.html   (space hai beech mein) ❌\nstyle (1).css     (bracket aur number) ❌\nScript.js         (capital S) ❌' },
          { type: 'subheading', content: 'Phone Se Download Karte Waqt Naam Galat Ho Jaye Toh:' },
          { type: 'list', content: '<strong>Step 1:</strong> GitHub par file open karo\n<strong>Step 2:</strong> Edit (pencil) icon par click karo\n<strong>Step 3:</strong> Sabse upar file name dikhega — use clear karo aur sahi naam likh do\n<strong>Step 4:</strong> "Commit changes" dabao — ho gaya!' },
        ]
      },
      {
        id: 'step-7-checklist',
        title: 'Step 7: Deploy Se Pehle Final Checklist',
        badge: '7',
        blocks: [
          { type: 'text', content: '<strong>GitHub par upload karne se pehle ye poori checklist complete karo:</strong>' },
          { type: 'subheading', content: 'HTML Files:' },
          { type: 'list', content: '☐ index.html mein style.css linked hai\n☐ index.html mein script.js linked hai\n☐ about.html mein style.css linked hai\n☐ about.html mein script.js linked hai\n☐ projects.html mein style.css linked hai\n☐ projects.html mein script.js linked hai\n☐ contact.html mein style.css linked hai\n☐ contact.html mein script.js linked hai' },
          { type: 'subheading', content: 'Navigation:' },
          { type: 'list', content: '☐ Har page se Home jaata hai\n☐ Har page se About jaata hai\n☐ Har page se Projects jaata hai\n☐ Har page se Contact jaata hai' },
          { type: 'subheading', content: 'File Names:' },
          { type: 'list', content: '☐ index.html — sahi naam\n☐ about.html — sahi naam\n☐ projects.html — sahi naam\n☐ contact.html — sahi naam\n☐ style.css — sahi naam\n☐ script.js — sahi naam' },
          { type: 'subheading', content: 'Content:' },
          { type: 'list', content: '☐ Apna naam sahi jagah hai\n☐ Placeholder text remove kiya\n☐ Apni real info daali' },
          { type: 'tip', content: '<strong>Jab ye saari cheezein tick ho jayein</strong> — tab GitHub par upload karo!' },
        ]
      },
      {
        id: 'common-problems',
        title: 'Common Problems Aur Unke Solutions',
        blocks: [
          { type: 'subheading', content: 'Problem 1: "CSS kaam nahi kar rahi — website plain dikhi rahi hai"' },
          { type: 'text', content: '<strong>Solution:</strong> Claude ko do: "My website is showing without any styling. CSS is not being applied. Here is my index.html: [CODE] Here is my style.css: [CODE] Find why CSS is not working and fix it."' },
          { type: 'subheading', content: 'Problem 2: "Navigation links kaam nahi kar rahe"' },
          { type: 'text', content: '<strong>Solution:</strong> Claude ko do: "My navigation links are not working. When I click About nothing happens. Here is my navigation code: [CODE] Fix the navigation links."' },
          { type: 'subheading', content: 'Problem 3: "Ek page ka design alag dikhi raha hai"' },
          { type: 'text', content: '<strong>Solution:</strong> Claude ko do: "My about.html page looks different from index.html. The styling is inconsistent. Here is about.html: [CODE] Here is index.html: [CODE] Here is style.css: [CODE] Make the design consistent."' },
          { type: 'subheading', content: 'Problem 4: "Mobile mein website achhi nahi dikhi rahi"' },
          { type: 'text', content: '<strong>Solution:</strong> Claude ko do: "My website does not look good on mobile. Please update the style.css to make it fully mobile responsive. Here is my current style.css: [CODE] Give me the complete updated file."' },
        ]
      },
      {
        id: 'recap',
        title: 'Part 6 Complete! Quick Recap',
        blocks: [
          { type: 'table', headers: ['Step', 'Kya Kiya'], rows: [['Step 1', 'Notes app mein manually check kiya'], ['Step 2', 'Navigation links check kiye'], ['Step 3', 'Claude se har file review karwayi'], ['Step 4', 'Combined final review karwayi'], ['Step 5', 'Bugs fix karwaye'], ['Step 6', 'File names verify kiye'], ['Step 7', 'Final checklist complete ki']] },
          { type: 'warning', content: '<strong>Golden Rule of This Part:</strong> <em>"Deploy se pehle review — review ke baad deploy!"</em> Bina review kiye deploy kiya toh broken website live ho jaayegi!' },
        ]
      }
    ]
  },
  {
    number: 7,
    id: 'part-7',
    title: 'GitHub Par Naya Repository Banao Aur Files Upload Karo!',
    subtitle: 'Apna code online store karna seekho',
    eyebrow: 'PART 07',
    sections: [
      {
        id: 'what-is-repo',
        title: 'Pehle Samjho — Repository Kya Hoti Hai?',
        blocks: [
          { type: 'text', content: '<strong>Repository = Tumhari website ka ek online folder</strong>' },
          { type: 'text', content: 'Jaise phone mein ek folder hota hai jisme saari photos hoti hain — waise hi GitHub par ek <strong>repository</strong> hoti hai jisme tumhari website ki saari files hoti hain!' },
          { type: 'code', language: 'text', content: 'Tumhara GitHub Account\n|\n▼\n📁 Repository "my-portfolio"\n|\n▼\n├── index.html\n├── about.html\n├── projects.html\n├── contact.html\n├── style.css\n└── script.js' },
        ]
      },
      {
        id: 'step-1-repo',
        title: 'Step 1: GitHub Par Naya Repository Banao',
        badge: '1',
        blocks: [
          { type: 'text', content: '<strong>Step 1:</strong> Phone mein browser kholo aur jao <code>github.com</code>' },
          { type: 'text', content: '<strong>Step 2:</strong> Apne account mein <strong>login karo</strong>' },
          { type: 'text', content: '<strong>Step 3:</strong> Upar right corner mein <strong>"+" icon</strong> dikhega — us par tap karo' },
          { type: 'text', content: '<strong>Step 4:</strong> Menu aayega — <strong>"New repository"</strong> par tap karo' },
          { type: 'text', content: '<strong>Step 5:</strong> Ab ek form aayega — ye fill karo:' },
          { type: 'subheading', content: 'Repository Name:' },
          { type: 'text', content: 'Yahan apni website ka naam likho' },
          { type: 'text', content: '<strong>Sahi examples:</strong> my-portfolio, utkarsh-website, my-bakery-site' },
          { type: 'text', content: '<strong>Galat examples:</strong> My Portfolio (spaces nahi chalenge), my_portfolio (underscore avoid karo), MyPortfolio (capital letters avoid karo)' },
          { type: 'tip', content: '<strong>Tip:</strong> Naam chhota aur simple rakho — ye tumhari website ke URL mein aayega! Example: <code>utkarsh.vercel.app</code>' },
          { type: 'subheading', content: 'Description (Optional):' },
          { type: 'text', content: 'Yahan apni website ke baare mein ek line likho — ye optional hai. Example: "My personal portfolio website"' },
          { type: 'subheading', content: 'Public ya Private:' },
          { type: 'text', content: '<strong>Public</strong> ← YE SELECT KARO. Public isliye — Vercel free mein sirf public repositories deploy kar sakta hai!' },
          { type: 'subheading', content: 'README File — Bahut Zaroori!' },
          { type: 'text', content: 'Neeche ek checkbox dikhega: <strong>Add a README file</strong> ← IS PAR TICK KARO' },
          { type: 'warning', content: '<strong>Ye bahut zaroori hai!</strong> README file tick karne se repository "initialized" hoti hai — iske bina files upload karna mushkil ho jaata hai!' },
          { type: 'text', content: '<strong>Step 6:</strong> Sab fill karne ke baad neeche <strong>"Create repository"</strong> green button dabao. <strong>Repository ban gayi!</strong>' },
        ]
      },
      {
        id: 'readme',
        title: 'Step 2: README File Ko Samjho',
        badge: '2',
        blocks: [
          { type: 'text', content: '<strong>README.md = Tumhari repository ka "About" page</strong>' },
          { type: 'text', content: 'Ye ek simple text file hoti hai jo batati hai: Ye website kya hai, Kisne banaya, Kaise use karein' },
          { type: 'text', content: 'GitHub par README file automatically khul jaayegi edit ke liye — ya baad mein edit kar sakte ho:' },
          { type: 'code', language: 'markdown', content: '# Meri Portfolio Website\n\nYe meri personal portfolio website hai jo Maine Claude AI ki help se banayi hai.\n\n## Technologies Used\n- HTML\n- CSS\n- JavaScript\n- Claude AI\n\n## Live Website\n[Yahan baad mein Vercel link daalna]\n\n## Made By\nUtkarsh' },
          { type: 'tip', content: '<strong>Abhi README zyada important nahi</strong> — baad mein edit kar lena. Pehle files upload karo!' },
        ]
      },
      {
        id: 'step-3-upload',
        title: 'Step 3: Files Upload Karo',
        badge: '3',
        blocks: [
          { type: 'text', content: 'Ab repository ban gayi — ab isme apni website ki files daalte hain!' },
          { type: 'text', content: '<strong>Step 1:</strong> Apni repository khuli hogi — neeche <strong>"Add file"</strong> button dikhega — tap karo' },
          { type: 'text', content: '<strong>Step 2:</strong> 2 options aayenge: <strong>Create new file</strong> ya <strong>Upload files</strong> ← YE SELECT KARO' },
          { type: 'text', content: '<strong>Step 3:</strong> <strong>"Upload files"</strong> par tap karo' },
          { type: 'text', content: '<strong>Step 4:</strong> Ek upload page aayega — <strong>"Choose your files"</strong> par tap karo' },
          { type: 'text', content: '<strong>Step 5:</strong> Phone ki <strong>Files app</strong> ya <strong>Downloads</strong> folder khul jayegi — apni website ki files select karo' },
          { type: 'text', content: '<strong>Files Kaise Select Karein:</strong> Ek ek file select karo: index.html, about.html, projects.html, contact.html, style.css, script.js' },
          { type: 'tip', content: '<strong>Ek saath saari files select karne ki koshish karo</strong> — zyada tar phones mein files ko press & hold karke multiple select kar sakte ho!' },
          { type: 'text', content: '<strong>Step 6:</strong> Files select hone ke baad wapas GitHub page par aao — tumhari files list mein dikhne lagengi' },
          { type: 'text', content: '<strong>Step 7:</strong> Neeche scroll karo — <strong>"Commit changes"</strong> section dikhega:' },
          { type: 'text', content: 'Pehla box — commit message: <code>"Add website files"</code> ← Ye likho. Doosra box — description (optional): Khaali chhod sakte ho' },
          { type: 'text', content: '<strong>Step 8:</strong> <strong>"Commit changes"</strong> green button dabao. Thoda wait karo — files upload ho rahi hain! <strong>Files upload ho gayi!</strong>' },
        ]
      },
      {
        id: 'step-4-verify',
        title: 'Step 4: Verify Karo — Saari Files Aayi Ya Nahi?',
        badge: '4',
        blocks: [
          { type: 'text', content: 'Upload hone ke baad repository mein saari files dikhni chahiye:' },
          { type: 'code', language: 'text', content: 'my-portfolio\n├── README.md      ← Ye pehle se thi\n├── index.html     ← Nai upload ki\n├── about.html     ← Nai upload ki\n├── projects.html  ← Nai upload ki\n├── contact.html   ← Nai upload ki\n├── style.css      ← Nai upload ki\n└── script.js      ← Nai upload ki' },
          { type: 'warning', content: '<strong>Agar koi file missing hai</strong> — wapas "Add file" → "Upload files" karke sirf wahi file upload karo!' },
        ]
      },
      {
        id: 'step-5-fix-name',
        title: 'Step 5: File Ka Naam Galat Ho Toh Fix Karo',
        badge: '5',
        blocks: [
          { type: 'text', content: 'Kabhi kabhi phone se upload karte waqt file ka naam galat ho jaata hai:' },
          { type: 'text', content: '<strong>Galat ho sakta hai:</strong> index-1.html, index (1).html, Index.html, style (2).css' },
          { type: 'subheading', content: 'Naam Kaise Fix Karein:' },
          { type: 'list', content: '<strong>Step 1:</strong> Repository mein us file par tap karo jiska naam galat hai\n<strong>Step 2:</strong> File khul jaayegi — upar right mein pencil icon dikhega — tap karo\n<strong>Step 3:</strong> Sabse upar file ka naam dikhega ek box mein — use clear karo aur sahi naam likh do\n<strong>Step 4:</strong> Neeche "Commit changes" button dabao\n<strong>Step 5:</strong> Ek popup aayega — "Commit changes" green button dobara dabao\n<strong>File ka naam fix ho gaya!</strong>' },
        ]
      },
      {
        id: 'step-6-fix-content',
        title: 'Step 6: File Ka Content Galat Ho Toh Fix Karo',
        badge: '6',
        blocks: [
          { type: 'text', content: 'Agar kisi file mein galat code gaya hai — GitHub par hi edit kar sakte ho!' },
          { type: 'list', content: '<strong>Step 1:</strong> Us file par tap karo\n<strong>Step 2:</strong> Pencil icon par tap karo\n<strong>Step 3:</strong> Code dikhega — uski jagah <strong>naya correct code paste karo</strong>\n<strong>Step 4:</strong> "Commit changes" dabao → popup mein dobara "Commit changes" dabao\n<strong>File update ho gayi!</strong>' },
        ]
      },
      {
        id: 'step-7-add-new',
        title: 'Step 7: Nai File Add Karni Ho Toh',
        badge: '7',
        blocks: [
          { type: 'text', content: 'Agar Claude ne koi extra file banayi jo upload karna bhool gaye:' },
          { type: 'list', content: '<strong>Step 1:</strong> Repository mein "Add file" par tap karo\n<strong>Step 2:</strong> "Create new file" select karo\n<strong>Step 3:</strong> Sabse upar file ka naam likh: style.css ya script.js ya jo bhi chahiye\n<strong>Step 4:</strong> Neeche bade box mein code paste karo\n<strong>Step 5:</strong> "Commit changes" dabao → popup mein dobara dabao\n<strong>Nai file add ho gayi!</strong>' },
        ]
      },
      {
        id: 'common-problems',
        title: 'Common Problems Aur Solutions',
        blocks: [
          { type: 'subheading', content: 'Problem 1: "Upload files option nahi dikhi raha"' },
          { type: 'text', content: '<strong>Solution:</strong> Repository ka main page kholo (jahan saari files dikhti hain). Wahan "Add file" button dikhega. Agar mobile mein nahi dikhi raha — phone ko landscape mode mein ghuma ke dekho!' },
          { type: 'subheading', content: 'Problem 2: "File upload ho gayi par dikhi nahi rahi"' },
          { type: 'text', content: '<strong>Solution:</strong> Page refresh karo — pull down karke refresh karo — file aa jaayegi!' },
          { type: 'subheading', content: 'Problem 3: "Commit changes ke baad error aa raha hai"' },
          { type: 'text', content: '<strong>Solution:</strong> Ek baar wapas jao — repository main page par aao — aur dobara try karo. GitHub kabhi kabhi slow hota hai — 2-3 minute wait karo!' },
          { type: 'subheading', content: 'Problem 4: "Saari files ek saath select nahi ho rahi"' },
          { type: 'text', content: '<strong>Solution:</strong> Ek ek karke upload karo — har file ke liye alag "Upload files" karo. Thoda time lagega par kaam ho jaayega!' },
        ]
      },
      {
        id: 'recap',
        title: 'Part 7 Complete! Quick Recap',
        blocks: [
          { type: 'table', headers: ['Step', 'Kya Kiya'], rows: [['Step 1', 'Naya repository banaya'], ['Step 2', 'README file samjhi'], ['Step 3', 'Saari files upload ki'], ['Step 4', 'Verify kiya saari files aayi'], ['Step 5', 'Galat file names fix kiye'], ['Step 6', 'Galat content fix kiya'], ['Step 7', 'Extra files add karna seekha']] },
          { type: 'warning', content: '<strong>Golden Rule of This Part:</strong> <em>"Pehle repository banao — README ke saath — phir files upload karo!"</em> README ke bina repository mein upload karna mushkil hota hai!' },
        ]
      }
    ]
  },
  {
    number: 8,
    id: 'part-8',
    title: 'Vercel Ko GitHub Se Kaise Connect Karein?',
    subtitle: 'Website ko internet par live karna — ek baar connect, hamesha automatic',
    eyebrow: 'PART 08',
    sections: [
      {
        id: 'how-vercel-works',
        title: 'Pehle Samjho — Vercel Kaam Kaise Karta Hai?',
        blocks: [
          { type: 'text', content: 'Ek simple example se samjho:' },
          { type: 'code', language: 'text', content: 'Tumhara GitHub = Ek library 📚\nTumhari Repository = Library mein ek shelf\nTumhari Files = Us shelf ki kitaabein\nVercel = Ek printer 🖨\nJo library se kitaabein lekar duniya ke saamne present karta hai!' },
          { type: 'text', content: '<strong>Matlab:</strong>' },
          { type: 'list', content: 'GitHub par code rakho\nVercel us code ko uthata hai\nWebsite internet par live ho jaati hai\nKoi bhi duniya mein dekh sakta hai!' },
          { type: 'tip', content: '<strong>Sabse achhi baat:</strong> Jab bhi tum GitHub par koi file update karo — Vercel <strong>automatically</strong> website update kar deta hai! Dobara kuch karna nahi padta!' },
        ]
      },
      {
        id: 'step-1-login',
        title: 'Step 1: Vercel Par Login Karo',
        badge: '1',
        blocks: [
          { type: 'text', content: '<strong>Step 1:</strong> Phone mein browser kholo aur jao <code>vercel.com</code>' },
          { type: 'text', content: '<strong>Step 2:</strong> Upar right corner mein <strong>"Log In"</strong> par tap karo' },
          { type: 'text', content: '<strong>Step 3:</strong> <strong>"Continue with GitHub"</strong> par tap karo' },
          { type: 'text', content: '<strong>Step 4:</strong> GitHub tumse poochega: <em>"Vercel wants to access your GitHub"</em> → "Authorize Vercel" green button par tap karo' },
          { type: 'text', content: '<strong>Step 5:</strong> Vercel ka <strong>dashboard</strong> khul jaayega — kuch aisa dikhega: "Welcome to Vercel!" [Add New Project]' },
          { type: 'text', content: '<strong>Vercel mein login ho gaye!</strong>' },
        ]
      },
      {
        id: 'step-2-project',
        title: 'Step 2: Naya Project Add Karo',
        badge: '2',
        blocks: [
          { type: 'text', content: '<strong>Step 1:</strong> Dashboard par <strong>"Add New"</strong> button dikhega — tap karo' },
          { type: 'text', content: '<strong>Step 2:</strong> Dropdown aayega: <strong>Project</strong> ← YE SELECT KARO' },
          { type: 'text', content: '<strong>Step 3:</strong> <strong>"Project"</strong> par tap karo' },
        ]
      },
      {
        id: 'step-3-connect',
        title: 'Step 3: GitHub Repository Connect Karo',
        badge: '3',
        blocks: [
          { type: 'text', content: 'Ab ek naya page aayega — <strong>"Import Git Repository"</strong>' },
          { type: 'text', content: '<strong>Step 1:</strong> Yahan tumhari GitHub ki repositories dikhni chahiye' },
          { type: 'warning', content: '<strong>Agar repositories nahi dikhi rahi</strong> — neeche ye karo: "Adjust GitHub App Permissions" ya "Configure GitHub App" link dikhega — us par tap karo. Ek new page khulega — wahan "All repositories" select karo → Save karo → Wapas Vercel par aao' },
          { type: 'text', content: '<strong>Step 2:</strong> Ab tumhari repository list mein dikhegi — jaise:' },
          { type: 'code', language: 'text', content: 'my-portfolio          [Import] ← TAP KARO\nanother-repo          [Import]' },
          { type: 'text', content: '<strong>Step 3:</strong> Apni website wali repository ke saamne <strong>"Import"</strong> button par tap karo. <strong>Repository import ho gayi!</strong>' },
        ]
      },
      {
        id: 'step-4-configure',
        title: 'Step 4: Project Configure Karo',
        badge: '4',
        blocks: [
          { type: 'text', content: 'Import karne ke baad ek <strong>configuration page</strong> aayega — ye settings hogi:' },
          { type: 'subheading', content: 'Project Name:' },
          { type: 'text', content: 'Automatically tumhari repository ka naam aa jaayega. Example: my-portfolio. Ye tumhare Vercel URL mein aayega: <code>my-portfolio.vercel.app</code>. Chahiye toh change kar sakte ho — par simple rakho!' },
          { type: 'subheading', content: 'Framework Preset:' },
          { type: 'text', content: 'Ek dropdown hoga — "Framework Preset". Wahan likha hoga "Other" ya "Vite" etc. Tumhari website simple HTML/CSS/JS hai toh: <strong>"Other" select karo</strong>' },
          { type: 'subheading', content: 'Root Directory:' },
          { type: 'text', content: 'Ye option dikhega — <strong>isko mat chhedhna!</strong> Default "./" ya blank rehne do' },
          { type: 'subheading', content: 'Build & Output Settings:' },
          { type: 'text', content: '<strong>Ye bhi mat chhedhna!</strong> Sab kuch default rehne do. Simple HTML websites ke liye koi build settings nahi chahiye' },
          { type: 'tip', content: '<strong>Simple rule:</strong> Sirf Project Name dekho — baaki sab default rehne do!' },
        ]
      },
      {
        id: 'step-5-deploy',
        title: 'Step 5: Deploy Karo!',
        badge: '5',
        blocks: [
          { type: 'text', content: '<strong>Step 1:</strong> Saari settings check karne ke baad neeche <strong>"Deploy"</strong> button dikhega' },
          { type: 'text', content: '<strong>Step 2:</strong> <strong>"Deploy"</strong> par tap karo' },
          { type: 'text', content: '<strong>Step 3:</strong> Ab ek <strong>loading screen</strong> aayegi — kuch aisa dikhega:' },
          { type: 'code', language: 'text', content: '🔄 Building...\nCloning repository...\nInstalling dependencies...\nBuilding project...\nDeploying...' },
          { type: 'text', content: '<strong>Step 4:</strong> Thoda wait karo — <strong>30 seconds se 2 minute</strong> lag sakte hain' },
          { type: 'text', content: '<strong>Step 5:</strong> Jab deploy ho jaayega — ek <strong>celebration screen</strong> aayegi!' },
          { type: 'code', language: 'text', content: '🎉 Congratulations!\nYour project has been successfully deployed!\n[Visit] ← Ye button dikhega' },
          { type: 'text', content: '<strong>Step 6:</strong> <strong>"Visit"</strong> button par tap karo — tumhari <strong>website live</strong> ho gayi!' },
        ]
      },
      {
        id: 'step-6-url',
        title: 'Step 6: Apna Vercel URL Dekho',
        badge: '6',
        blocks: [
          { type: 'text', content: 'Website live hone ke baad tumhe ek <strong>free URL</strong> milega:' },
          { type: 'code', language: 'text', content: 'Format: [project-name].vercel.app\nExample: my-portfolio.vercel.app\n         utkarsh-website.vercel.app' },
          { type: 'subheading', content: 'URL Kahan Milega:' },
          { type: 'list', content: '<strong>Step 1:</strong> Vercel dashboard par jao\n<strong>Step 2:</strong> Apna project dikhega — us par tap karo\n<strong>Step 3:</strong> Upar URL dikhega — <strong>copy karo</strong> aur share karo!' },
        ]
      },
      {
        id: 'step-7-updates',
        title: 'Step 7: Automatic Updates Kaise Kaam Karte Hain?',
        badge: '7',
        blocks: [
          { type: 'text', content: '<strong>Ye Vercel ki sabse badi khoobsoorti hai!</strong>' },
          { type: 'code', language: 'text', content: 'Tumne GitHub par koi file update ki\n↓\nVercel automatically detect karta hai\n↓\nAutomatically redeploy ho jaata hai\n↓\n2-3 minute mein website update!' },
          { type: 'text', content: '<strong>Matlab:</strong>' },
          { type: 'list', content: 'Koi bug fix kiya → GitHub par update karo → Website automatically fix!\nKoi naya content daala → GitHub par update karo → Website automatically update!\n<strong>Vercel ko dobara kuch nahi karna!</strong>' },
        ]
      },
      {
        id: 'common-problems',
        title: 'Common Problems Aur Solutions',
        blocks: [
          { type: 'subheading', content: 'Problem 1: "Repository list mein meri repo nahi dikhi rahi"' },
          { type: 'text', content: '<strong>Solution:</strong> Vercel mein "Configure GitHub App" par tap karo → GitHub page khulega → "Repository access" mein "All repositories" select karo → Save karo → Wapas Vercel par aao → Ab dikhegi!' },
          { type: 'subheading', content: 'Problem 2: "Deploy fail ho gaya — error aa raha hai"' },
          { type: 'text', content: '<strong>Solution:</strong> Error message copy karo → Claude ko do ye prompt: "My Vercel deployment failed with this error: [ERROR MESSAGE] My website is a simple HTML CSS JS website. How do I fix this?" → Claude batayega kya fix karna hai!' },
          { type: 'subheading', content: 'Problem 3: "Website khuli par CSS nahi dikhi rahi — plain hai"' },
          { type: 'text', content: '<strong>Solution:</strong> GitHub par apni HTML files kholo → Check karo style.css linked hai ya nahi: <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> → Agar nahi hai — add karo aur commit karo → Vercel automatically update kar dega!' },
          { type: 'subheading', content: 'Problem 4: "Vercel pe website khuli par kuch pages 404 error de rahe hain"' },
          { type: 'text', content: '<strong>Solution:</strong> GitHub par check karo — kya woh page ki file sahi naam se upload hai? Example: about.html — sahi naam hai? Sahi naam se rename karo GitHub par → Vercel automatically fix ho jaayega!' },
          { type: 'subheading', content: 'Problem 5: "Visit button ke baad blank white page aa raha hai"' },
          { type: 'text', content: '<strong>Solution:</strong> GitHub par index.html check karo — Kya file ka naam exactly "index.html" hai? index.html — sahi, home.html — galat (Vercel aur browsers hamesha index.html ko pehla page maante hain!) → Rename karo — fix ho jaayega!' },
        ]
      },
      {
        id: 'recap',
        title: 'Part 8 Complete! Quick Recap',
        blocks: [
          { type: 'table', headers: ['Step', 'Kya Kiya'], rows: [['Step 1', 'Vercel mein GitHub se login kiya'], ['Step 2', 'Naya project add kiya'], ['Step 3', 'GitHub repository connect ki'], ['Step 4', 'Project configure kiya'], ['Step 5', 'Deploy kiya — website live!'], ['Step 6', 'Apna Vercel URL liya'], ['Step 7', 'Automatic updates samjhe']] },
          { type: 'warning', content: '<strong>Golden Rule of This Part:</strong> <em>"Ek baar connect karo — hamesha ke liye automatic!"</em> Vercel aur GitHub ek baar connect ho jaaye — phir sirf GitHub update karo, baaki sab Vercel khud karta hai!' },
        ]
      }
    ]
  },
  {
    number: 9,
    id: 'part-9',
    title: 'Website Deploy Karna — Vercel Aur Netlify!',
    subtitle: 'Final step — website ko duniya ke saamne launch karna',
    eyebrow: 'PART 09',
    sections: [
      {
        id: 'intro',
        title: 'Introduction',
        blocks: [
          { type: 'text', content: '<strong>Ye guide ka last part hai!</strong> Is part mein 2 cheezein cover karenge:' },
          { type: 'list', content: '<strong>Vercel</strong> se multiple file website ka final deployment process\n<strong>Netlify</strong> se single HTML file website deploy karna — drag & drop se!' },
        ]
      },
      {
        id: 'vercel-section',
        title: 'SECTION A: Vercel Se Website Deploy Karna',
        blocks: [
          { type: 'text', content: '<strong>Agar tumne Part 8 follow kiya hai — toh tumhari website already live hai!</strong> Par ye section mein hum sikhenge ki <strong>future mein changes</strong> kaise deploy karein aur kuch issues aayein toh kaise handle karein!' },
          { type: 'subheading', content: 'Vercel Deployment Samjho — Ek Baar Phir:' },
          { type: 'text', content: '<strong>Tumne Part 8 mein ye kar liya:</strong> GitHub Repository + Vercel Connection = Website Live!' },
          { type: 'text', content: '<strong>Ab jab bhi koi change karna ho:</strong> GitHub par file update karo → Vercel automatically 2-3 minute mein update!' },
        ]
      },
      {
        id: 'future-updates',
        title: 'Future Mein Website Update Kaise Karein?',
        blocks: [
          { type: 'text', content: 'Maan lo tumhe apni website mein kuch badalna hai — jaise apna phone number update karna ya naya project add karna:' },
          { type: 'list', content: '<strong>Step 1:</strong> Claude se updated file banwao: "Here is my current [file name] code: [APNA CURRENT CODE PASTE KARO] I want to make these changes: [JO CHANGES CHAHIYE WO LIKHO] Give me the complete updated file."\n<strong>Step 2:</strong> GitHub par us file par jao\n<strong>Step 3:</strong> File par tap karo → pencil icon dabao\n<strong>Step 4:</strong> Purana code select all karke delete karo\n<strong>Step 5:</strong> Naya code paste karo\n<strong>Step 6:</strong> "Commit changes" dabao → popup mein dobara dabao\n<strong>Step 7:</strong> 2-3 minute wait karo — Vercel automatically update kar dega!' },
        ]
      },
      {
        id: 'deployment-status',
        title: 'Vercel Dashboard Se Deployment Status Kaise Dekhen?',
        blocks: [
          { type: 'list', content: '<strong>Step 1:</strong> vercel.com par jao — login karo\n<strong>Step 2:</strong> Apna project dikhega — tap karo\n<strong>Step 3:</strong> <strong>"Deployments"</strong> tab par tap karo\n<strong>Step 4:</strong> Saari deployments ki list dikhegi: ✅ Production — Current live website, ✅ 2 hours ago — Pichli deployment, ✅ Yesterday — Usse pehli' },
          { type: 'tip', content: '<strong>Agar latest deployment mein</strong> red cross dikhi raha hai: Us deployment par tap karo → error message dekho → Claude se fix karwao!' },
        ]
      },
      {
        id: 'manual-redeploy',
        title: 'Vercel Par Manually Redeploy Kaise Karein?',
        blocks: [
          { type: 'text', content: 'Kabhi kabhi automatic update nahi hota — tab manually redeploy karo:' },
          { type: 'list', content: '<strong>Step 1:</strong> Vercel dashboard mein apna project kholo\n<strong>Step 2:</strong> "Deployments" tab par jao\n<strong>Step 3:</strong> Latest deployment par tap karo\n<strong>Step 4:</strong> "..." (three dots) icon dikhega — tap karo\n<strong>Step 5:</strong> "Redeploy" option aayega — tap karo\n<strong>Step 6:</strong> "Redeploy" confirm karo\n<strong>Website manually redeploy ho gayi!</strong>' },
        ]
      },
      {
        id: 'custom-url',
        title: 'Apna Vercel URL Customize Karo',
        blocks: [
          { type: 'text', content: 'Default URL hota hai: <code>my-portfolio-xyz123.vercel.app</code> (random numbers bhi aa jaate hain)' },
          { type: 'text', content: '<strong>Isse clean banana ke liye:</strong>' },
          { type: 'list', content: '<strong>Step 1:</strong> Vercel dashboard mein project kholo\n<strong>Step 2:</strong> "Settings" tab par tap karo\n<strong>Step 3:</strong> "Domains" option par tap karo\n<strong>Step 4:</strong> "Edit" par tap karo apne default domain ke saamne\n<strong>Step 5:</strong> Naya naam likh: my-portfolio.vercel.app, utkarsh-dev.vercel.app\n<strong>Step 6:</strong> "Save" karo' },
          { type: 'warning', content: '<strong>Agar naam already kisi ne le rakha hai</strong> — thoda alag naam try karo: <code>utkarsh-portfolio.vercel.app</code> ya <code>utkarsh-codes.vercel.app</code>' },
        ]
      },
      {
        id: 'netlify-section',
        title: 'SECTION B: Netlify Se Single HTML File Deploy Karna',
        blocks: [
          { type: 'text', content: '<strong>Ye section un logon ke liye hai jinki website sirf ek file mein hai</strong> — ek <code>index.html</code> jisme CSS aur JS sab embedded hai!' },
          { type: 'text', content: 'Netlify ka <strong>drag & drop</strong> feature duniya ka sabse aasaan deployment method hai — seriously!' },
        ]
      },
      {
        id: 'what-is-netlify',
        title: 'Netlify Kya Hai?',
        blocks: [
          { type: 'code', language: 'text', content: 'Netlify = Vercel jaisa hi ek free hosting platform\nPar single file websites ke liye iska drag & drop feature sabse aasaan hai!\nFree URL milta hai: my-site.netlify.app' },
        ]
      },
      {
        id: 'netlify-account',
        title: 'Step 1: Netlify Par Account Banao',
        badge: '1',
        blocks: [
          { type: 'text', content: '<strong>Step 1:</strong> Browser mein jao <code>netlify.com</code>' },
          { type: 'text', content: '<strong>Step 2:</strong> <strong>"Sign Up"</strong> par tap karo' },
          { type: 'text', content: '<strong>Step 3:</strong> <strong>"Sign up with GitHub"</strong> select karo' },
          { type: 'tip', content: '<strong>Same GitHub account use karo</strong> — sab ek jagah connected rahega!' },
          { type: 'text', content: '<strong>Step 4:</strong> GitHub se authorize karo — <strong>"Authorize Netlify"</strong> dabao' },
          { type: 'text', content: '<strong>Step 5:</strong> Netlify ka dashboard khul jaayega: "Welcome to Netlify!"' },
          { type: 'text', content: '<strong>Account ready!</strong>' },
        ]
      },
      {
        id: 'netlify-file',
        title: 'Step 2: Single HTML File Banao/Ready Karo',
        badge: '2',
        blocks: [
          { type: 'text', content: 'Yaad hai Part 3 mein bataya tha — single file mein sab kuch ek hi file mein hota hai:' },
          { type: 'code', language: 'html', content: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Meri Website</title>\n  <!-- CSS ANDAR HI -->\n  <style>\n    body { background: #1a1a2e; }\n    h1 { color: #00d4ff; }\n  </style>\n</head>\n<body>\n  <h1>Namaste!</h1>\n  <button onclick="hello()">Click Karo</button>\n  <!-- JS BHI ANDAR HI -->\n  <script>\n    function hello() {\n      alert("Hello!");\n    }\n  </script>\n</body>\n</html>' },
          { type: 'text', content: '<strong>Ye file:</strong> Phone ke notes app mein save hai, Ya Claude se banwayi hai, <strong>Sirf EK file hai</strong> — <code>index.html</code>' },
        ]
      },
      {
        id: 'netlify-save',
        title: 'Step 3: File Phone Mein Save Karo',
        badge: '3',
        blocks: [
          { type: 'text', content: '<strong>Agar Claude se code liya hai:</strong>' },
          { type: 'list', content: '<strong>Step 1:</strong> Claude ka code <strong>copy karo</strong>\n<strong>Step 2:</strong> Phone mein <strong>Google Drive</strong> ya <strong>Files app</strong> kholo\n<strong>Step 3:</strong> Naya document banao — code paste karo\n<strong>Step 4:</strong> File ko <strong>"index.html"</strong> naam se save karo' },
          { type: 'warning', content: '<strong>Bahut zaroori:</strong> File ka naam exactly <code>index.html</code> hona chahiye — <code>index.txt</code> ya <code>index.doc</code> nahi!' },
        ]
      },
      {
        id: 'netlify-deploy',
        title: 'Step 4: Netlify Par Deploy Karo — Drag & Drop!',
        badge: '4',
        blocks: [
          { type: 'text', content: '<strong>Phone se drag & drop thoda alag hota hai</strong> — ye steps follow karo:' },
          { type: 'text', content: '<strong>Step 1:</strong> Netlify dashboard par jao' },
          { type: 'text', content: '<strong>Step 2:</strong> Neeche scroll karo — ek <strong>special box</strong> dikhega: "Drag and drop your site folder here" ya "Or browse to upload" ← TAP KARO' },
          { type: 'text', content: '<strong>Step 3:</strong> <strong>"browse to upload"</strong> par tap karo' },
          { type: 'text', content: '<strong>Step 4:</strong> Phone ki files app khulegi — apni <strong>index.html</strong> file select karo' },
          { type: 'warning', content: '<strong>Important:</strong> Netlify ek <strong>folder</strong> maangta hai — sirf file nahi! Isliye pehle ye karo: Phone mein ek naya folder banao "my-website" → index.html us folder mein daalo → Ab woh folder select karo Netlify mein' },
          { type: 'text', content: '<strong>Step 5:</strong> Folder select hone ke baad Netlify <strong>automatically deploy</strong> shuru kar dega!' },
          { type: 'code', language: 'text', content: '🔄 Uploading...\n🔄 Processing...\n✅ Done!' },
          { type: 'text', content: '<strong>Step 6:</strong> Deploy hone ke baad ek <strong>random URL</strong> milega: <code>amazing-cat-123456.netlify.app</code> (random naam aata hai pehle)' },
          { type: 'text', content: '<strong>Step 7:</strong> Us URL par tap karo — <strong>tumhari website live hai!</strong>' },
        ]
      },
      {
        id: 'netlify-custom-url',
        title: 'Step 5: Netlify URL Customize Karo',
        badge: '5',
        blocks: [
          { type: 'text', content: 'Random URL achha nahi lagta — isko change karte hain:' },
          { type: 'list', content: '<strong>Step 1:</strong> Netlify dashboard mein apna site dikhega — tap karo\n<strong>Step 2:</strong> "Site configuration" par tap karo\n<strong>Step 3:</strong> "Change site name" par tap karo\n<strong>Step 4:</strong> Apna manpasand naam likh: utkarsh-portfolio, my-calculator, utkarsh-quiz-app\n<strong>Step 5:</strong> "Save" karo' },
          { type: 'text', content: '<strong>Naya URL ban jaayega:</strong> <code>utkarsh-portfolio.netlify.app</code>' },
        ]
      },
      {
        id: 'netlify-update',
        title: 'Netlify Par Website Update Kaise Karein?',
        blocks: [
          { type: 'text', content: 'Single file website update karna bahut aasaan hai:' },
          { type: 'list', content: '<strong>Step 1:</strong> Claude se updated file banwao\n<strong>Step 2:</strong> Naya index.html phone mein save karo\n<strong>Step 3:</strong> Netlify dashboard mein apna site kholo\n<strong>Step 4:</strong> "Deploys" tab par tap karo\n<strong>Step 5:</strong> Wahi drag & drop box dikhega — naya folder upload karo\n<strong>Automatic update!</strong>' },
        ]
      },
      {
        id: 'vercel-vs-netlify',
        title: 'Vercel Vs Netlify — Kab Kya Use Karein?',
        blocks: [
          { type: 'table', headers: ['', 'VERCEL', 'NETLIFY'], rows: [['File Type', 'Multiple files HTML+CSS+JS alag alag', 'Single file (sab ek mein)'], ['Connection', 'GitHub se connect karo', 'Direct drag & drop karo'], ['Updates', 'Auto update — GitHub update karo bas', 'Manually upload karna padta hai'], ['Best For', 'Portfolio, Business site, Blog etc.', 'Calculator, Quiz app, Landing page']] },
        ]
      },
      {
        id: 'final-checklist',
        title: 'Poora Guide Complete! — Ek Last Checklist',
        blocks: [
          { type: 'list', content: '✅ Part 1 — Teen accounts banaye (Claude, GitHub, Vercel)\n✅ Part 2 — Claude se website ka plan banaya\n✅ Part 3 — Files samjhi (HTML, CSS, JS)\n✅ Part 4 — Single vs Multiple file decide kiya\n✅ Part 5 — Claude se files banwayi\n✅ Part 6 — Files review ki, bugs fix kiye\n✅ Part 7 — GitHub par repository banai aur files upload ki\n✅ Part 8 — Vercel ko GitHub se connect kiya\n✅ Part 9 — Website live kar di! 🌐🎉' },
        ]
      },
      {
        id: 'next-steps',
        title: 'Aage Kya Karein?',
        blocks: [
          { type: 'list', content: '<strong>1.</strong> URL copy karo aur LinkedIn par share karo\n<strong>2.</strong> Website ka screenshot lo aur Instagram par daalo\n<strong>3.</strong> Dosto ko link bhejo — feedback lo\n<strong>4.</strong> Claude se aur features add karwao\n<strong>5.</strong> Freelance clients ko apna portfolio link bhejo' },
        ]
      },
      {
        id: 'congratulations',
        title: 'Congratulations!',
        blocks: [
          { type: 'text', content: '<strong>Congratulations!</strong> Tumne ek poora guide seekh liya hai jo <strong>real value</strong> deta hai — Koi sponsorship nahi, koi promotion nahi — <strong>Sirf sachchi knowledge!</strong>' },
          { type: 'text', content: 'Ye guide padhke agar ek bhi banda apni <strong>pehli website</strong> bana le — <strong>Tumhara guide successful hai!</strong>' },
        ]
      }
    ]
  }
);

export default courseParts;
