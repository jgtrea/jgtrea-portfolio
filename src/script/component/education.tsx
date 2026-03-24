import { Tabs } from "@mantine/core";
import Schools from "./education/schools";
import Certifs from "./education/certifs";

const Education = () => {
  return (
    <Tabs defaultValue="education" variant="unstyled">
      <Tabs.List className="mantine-Tabs-list">
        <Tabs.Tab value="education" className="tab">
          <span className="tab-item">Education</span>
        </Tabs.Tab>
        <Tabs.Tab value="certificates" className="tab">
          <span className="tab-item">Certificates</span>
        </Tabs.Tab>
      </Tabs.List>

      <div className="background-section">
        <Tabs.Panel value="education" className="education-content">        
          <div className="edu-content">
            <Schools />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="certificates" className="education-content">
          <div className="edu-content">
            <Certifs />
          </div>
        </Tabs.Panel>
      </div>
    </Tabs> 
  );
};

export default Education;