import { ServiceIcon, ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesP, ServicesWrapper } from "./ServicesElements";
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-2.svg';

const Services = () => {
  return (
      <ServicesContainer  id="services">
          <ServicesH1>My Services</ServicesH1>
          <ServicesWrapper>
              <ServicesCard>
                  <ServiceIcon src={Icon1} />
                  <ServicesH2>Reduce Expenses</ServicesH2>
                  <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServiceIcon src={Icon2} />
                  <ServicesH2>Virtual Offices</ServicesH2>
                  <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServiceIcon src={Icon3} />
                  <ServicesH2>Premium Benefits</ServicesH2>
                  <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
              </ServicesCard>
          </ServicesWrapper>
      </ServicesContainer>
  );
};

export default Services;
