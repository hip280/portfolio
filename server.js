
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const profile = {
  name: "Sudeep Sah",
  role: "Mechanical Engineer · System Design",
  eyebrow: "Engineer · Educator · Researcher",
  tagline: "Designing practical mechanical solutions through engineering, teaching, and research.",
  location: "Kathmandu, Nepal",
  email: "sudeepsah147@gmail.com",
  phone: "+9779813322358",
  objective: "Seeking an organization where I can apply my theoretical knowledge and take my understanding of mechanical engineering to a deeper level.",
  summary: "Mechanical engineering professional with experience in technical instruction, lecturing, industrial engineering, and research. Interested in practical problem-solving, mechanical systems, and continuous learning.",
  education: [
    { year: "2024", degree: "M.Sc. in Mechanical System Design Engineering", school: "Pulchowk Engineering Campus · TU, IOE", result: "75.93%" },
    { year: "2019", degree: "B.Tech. in Mechanical Engineering", school: "J.B. Institute of Technology · UTU, Dehradun, India", result: "76.76%" },
    { year: "2014", degree: "10+2 · Science", school: "Model Multiple College, Janakpur · HSEB Nepal", result: "74.6%" },
    { year: "2012", degree: "S.L.C.", school: "Daffodils Public School, Janakpur · Nepal", result: "81.25%" }
  ],
  experience: [
    { period: "Dec 2022 — Present", title: "Automobile Instructor, Officer Level III", org: "Shankharapur Polytechnic Institute (CTEVT)", detail: "Technical instruction and practical learning in automobile-related subjects." },
    { period: "Part-time", title: "Part-time Lecturer", org: "Khwopa Engineering College", detail: "Lecturing alongside professional responsibilities." },
    { period: "Dec 2021 — Dec 2022", title: "Mechanical Instructor", org: "Balaju School of Engineering and Technology (CTEVT)", detail: "Worked in mechanical engineering instruction for approximately 11 months." },
    { period: "Aug 2019 — Dec 2021", title: "Mechanical Engineer", org: "Everest Paper Mills Pvt. Ltd., Mahendranagar", detail: "Mechanical engineering role in an industrial paper-mill environment." }
  ],
  research: [
    "Experimental Analysis of Fluid Flow and Heat Transfer of Al₂O₃–Water Nanofluid in Turbulated Tube.",
    "Evaluation of Distillate Yield in 3D-Single Slope Basin Type Solar Still: A Comparative Study of CFD and Experimental Approaches."
  ],
  skills: [
    { name: "AutoCAD", type: "Design & CAD" },
    { name: "Autodesk Fusion 360", type: "Design & CAD" },
    { name: "SolidWorks", type: "Design & CAD" },
    { name: "MS Office", type: "Productivity" },
    { name: "Mechanical skills", type: "Engineering" },
    { name: "Mechanical problem-solving", type: "Engineering" },
    { name: "Creativity", type: "Professional" },
    { name: "Machine-part assembly & disassembly", type: "Practical" }
  ],
  hobbies: ["Studying physics", "Watching movies", "Teaching"],
  languages: ["Nepali", "English", "Hindi", "Maithili"]
};

app.get("/", (req, res) => res.render("index", { profile }));
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => console.log(`Portfolio running at http://localhost:${PORT}`));