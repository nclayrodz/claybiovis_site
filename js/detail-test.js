const projectData = {
    "induction": {
      title: "How is induction performed?",
      date: "December 2024",
      description: "This was part of a series of animations created in collaboration with TVASurg. The content is based on TVASurg’s Patient Education: Induction of Labour website. We were tasked to transform the existing content into short, engaging and informative animations to be published on Instagram and YouTube Shorts. Each member was responsible for a set of shots, while adhering to a predefined style guide.",
      banner: "../images/logos/179_Project05.jpg",
      info: {
        Role: "Storyboarding, Visual Development and Animation<br>Team members: Molly Wells, Lauren Jones & Yu-Wen Jan",
        Tools: "Adobe After Effects, Illustrator, Photoshop",
        Client: "TVASurg",
        Audience: "Patients preparing for induction of labour"
      }
    },
  
    "neuroanatomy": {
      title: "Neuroanatomy Portrait",
      date: "April 2024",
      description: "A portrait highlighting key brain struct ures for educational purposes. Created as part of a neuroanatomy visualization series.",
      banner: "../images/works/neuroanatomy.jpg",
      info: {
        Role: "Concept Development and Rendering",
        Tools: "Photoshop, Illustrator",
        Client: "University of Toronto Neuroscience",
        Audience: "Medical students and educators"
      }
    },
  
    "data-vis": {
        title: "Neuroanatomy Portrait",
        date: "April 2024",
        description: "A portrait highlighting key brain structures for educational purposes. Created as part of a neuroanatomy visualization series.",
        banner: "../images/neuroanatomy.jpg",
        info: {
          Role: "Concept Development and Rendering",
          Tools: "Photoshop, Illustrator",
          Client: "University of Toronto Neuroscience",
          Audience: "Medical students and educators"
        }
      },
      "neuroanatomy": {
      title: "Neuroanatomy Portrait",
      date: "April 2024",
      description: "A portrait highlighting key brain struct ures for educational purposes. Created as part of a neuroanatomy visualization series.",
      banner: "../images/works/molvis.jpg",
      info: {
        Role: "Concept Development and Rendering",
        Tools: "Photoshop, Illustrator",
        Client: "University of Toronto Neuroscience",
        Audience: "Medical students and educators"
      }
    },
    // Add more projects here
  };
  
  function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }
  
  const id = getQueryParam("id");
  const project = projectData[id];
  
  if (project) {
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-date").textContent = project.date;
    document.getElementById("project-description").textContent = project.description;
    document.getElementById("project-banner").src = project.banner;
    document.getElementById("project-banner").alt = project.title;
  
    const togglesContainer = document.getElementById("project-toggles");
    for (let key in project.info) {
      const toggle = document.createElement("div");
      toggle.className = "toggle-group";
      toggle.innerHTML = `
        <button class="toggle-btn">${key} <span class="toggle-icon">+</span></button>
        <div class="toggle-content"><p>${project.info[key]}</p></div>
      `;
      togglesContainer.appendChild(toggle);
    }
  
    // Toggle logic
    document.querySelectorAll(".toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.classList.toggle("open");
        btn.querySelector(".toggle-icon").textContent =
          content.classList.contains("open") ? "−" : "+";
      });
    });
  } else {
    document.querySelector("main").innerHTML = "<p style='text-align:center;'>Project not found.</p>";
  }
  