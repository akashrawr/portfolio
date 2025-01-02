import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faAngleDoubleRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../data/projects';

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Calculate current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <section id="portfolio">
      <div className="section-highlight" data-aos="fade-up">
        Portfolio
      </div>
      <div className="portfolio-container" data-aos="fade-up">
        <div className="portfolio-card">
          <div className="portfolio-content">
            <h2>Portfolio</h2>
            {/* Project Container */}
            <div className="project-container">
              {currentProjects.map((project, index) => (
                <section className="project-card" key={index}>
                  <img
                    className="project-img"
                    src={project.imgSrc}
                    alt={project.altText}
                  />
                  <h3>{project.title}</h3>
                  <h5>Project Description</h5>
                  <p>{project.description}</p>
                  <div className="project-card-links">
                    <a href={project.repoLink} className="project-link">
                      <FontAwesomeIcon icon={faGithub} className="project-icons" />
                      Repository
                    </a>
                    {project.liveDemoLink && (
                      <a href={project.liveDemoLink} className="project-link">
                        <FontAwesomeIcon icon={faLaptopCode} className="project-icons" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </section>
              ))}
            </div>
            {/* End of Project Container */}

            {/* Pagination Controls */}
            <div className="pagination">
              <a href="#!" onClick={handlePrevious} disabled={currentPage === 1}>
                <FontAwesomeIcon icon={faAnglesLeft} />
              </a>
              {[...Array(totalPages)].map((_, index) => (
                <a
                  key={index + 1}
                  href="#!"
                  onClick={() => handlePageClick(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                >
                  {index + 1}
                </a>
              ))}
              <a href="#!" onClick={handleNext} disabled={currentPage === totalPages}>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;