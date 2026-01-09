import earlyDays from "../../assets/images/early-days.jpg";
import journey from "../../assets/images/journey.gif";
import coding from "../../assets/images/coding.jpg";
import codingJourney from "../../assets/images/coding-journey.jpg";
import AFPI from "../../assets/images/afpi-mohali.jpg";
import NAIT from "../../assets/images/nait-logo.jpg";
import portfolio from "../../assets/images/portfolio-dev.gif";

//projects
import resumeScanner from "../../assets/projects/resumeAI.png";
import mixtapes from "../../assets/projects/mixtape.png";
import cityRoads from "../../assets/projects/cityRoads.png";
import WHDS from "../../assets/projects/whds.png";
import capstone from "../../assets/projects/capstone.png";
import PlantCare from "../../assets/projects/projects.png";

export const imageData = {
  earlyDays: {
    url: earlyDays,
    description: "My early days in tech",
  },
  journey: {
    url: journey,
    description: "Journey to Canada",
  },
  coding: {
    url: coding,
    description: "Coding example in class",
  },
  codingJourney: {
    url: codingJourney,
    description: "Where coding brought me? To Edmonton",
  },
  AFPI: {
    url: AFPI,
    description: "My alma mater",
  },
  NAIT: {
    url: NAIT,
    description: "NAIT building",
  },
  portfolio: {
    url: portfolio,
    description: "Building the portfolio website",
  },
  resumeScanner: {
    url: resumeScanner,
    description: "AI powered resume scanner",
  },
  mixtapes: {
    url: mixtapes,
    description: "Generate mixtapes using Spotify API",
  },
  capstone: {
    url: capstone,
    description: "Built supply chain management system from scratch",
  },
  cityRoads: {
    url: cityRoads,
    description:
      "Fetches and builds city roads using nomatin and openstreet APIs",
  },
  WHDS: {
    url: WHDS,
    description: "Web hook delivery system built using ASP.NET",
  },
  plantCare: {
    url: PlantCare,
    description: "Care for plants using this mobile app build on Flutter ",
  },
};

export default function Images({
  url,
  description,
}: {
  url: string;
  description: string;
}) {
  return (
    <div>
      <img
        src={url}
        alt={description}
        loading="lazy"
        style={{
          objectFit: "contain",
          backgroundColor: "#111111",
          maxWidth: "250px",
        }}
        width="auto"
        height="auto"
      />
    </div>
  );
}
