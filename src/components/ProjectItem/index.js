import { FaExternalLinkAlt } from "react-icons/fa";
import "./index.css";

const ProjectItem = (props) => {
  const { eachProjectItem } = props;
  const { id, category, exploreLink, role, description, title, ImagUrl } =
    eachProjectItem;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 100%), url(${ImagUrl})`,
      }}
      className="project-item-card pb-3 fade-in-to-top"
    >
      <div>
        <h3 className="project-title">{title}</h3>
        <div className="mt-2">
          <button
            type="button"
            className="details-button"
            data-toggle="modal"
            data-target={`#modal-${id}`} // Use the unique ID here
          >
            Details
          </button>

          <div
            className="modal fade"
            id={`modal-${id}`} // Unique modal ID
            tabIndex="-1"
            role="dialog"
            aria-labelledby={`modalLabel-${id}`} // Unique label ID
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title project-details-card-heading"
                    id={`modalLabel-${id}`} // Unique label ID
                  >
                    Description
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="project-details-card-para">{description}</p>
                </div>
                {role && role.length !== 0 && (
                  <div>
                    <div className="modal-header">
                      <h5
                        className="modal-title project-details-card-heading"
                        id={`roleLabel-${id}`} // Optional unique label for role
                      >
                        My Role
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p className="project-details-card-para">{role}</p>
                    </div>
                  </div>
                )}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="details-button"
                    data-dismiss="modal"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>

          <a
            href={exploreLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="explore-icon-button">
              <FaExternalLinkAlt size={12} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
