import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavHeader from "./components/NavHeader";
import TopicList from "./components/TopicList";
import ProjectRoadmap from "./components/ProjectRoadmap";
import { golangProjects } from "./data/golangProjects";
import { fullstackProjects } from "./data/fullstackProjects";
import { mlProjects } from "./data/mlProjects";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#13111C] text-[#e2e0ea] overflow-x-hidden">
        <NavHeader />

        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <Routes>
            {/* DSA / CP Tracker */}
            <Route
              path="/"
              element={
                <>
                  <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                      🚀 <span className="gradient-text">CP Mastery</span>
                    </h1>
                    <p className="text-[#9490ab] text-lg max-w-xl mx-auto">
                      Your structured roadmap to competitive programming
                      dominance.
                    </p>
                  </header>
                  <TopicList />
                </>
              }
            />

            {/* Golang Projects */}
            <Route
              path="/golang"
              element={<ProjectRoadmap data={golangProjects} />}
            />

            {/* Full Stack Projects */}
            <Route
              path="/fullstack"
              element={<ProjectRoadmap data={fullstackProjects} />}
            />

            {/* ML / DL Projects */}
            <Route path="/ml" element={<ProjectRoadmap data={mlProjects} />} />
          </Routes>

          <footer className="mt-20 text-center text-[#6b6785] text-sm pb-8">
            <p>Built for the grind. Keep shipping. 🔥</p>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
