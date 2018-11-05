import { TableDemo }                from './components/tableDemo';
import { TransportationData }       from './components/transportationData';
import { RealTimeInformation }      from './components/realTimeInformation';
import { GraphContent }             from './components/graphContent';
import { CaseStudies }              from './components/caseStudies';
import { BenefitsContent }          from './components/benefitsContent';
import { TypesTransportationData }  from './components/typesTransportationData';
import { Map }                      from './components/map';
import { Standarts }                from './components/standarts';
import { Technologies }             from './components/technologies';
import { Footer }                   from "./components/footer";

import { styles }                   from "./scss/styles.scss";

const root = document.getElementById('root');
const inn = root.innerHTML;
root.innerHTML =  TableDemo               +
                  TransportationData      +
                  RealTimeInformation     +
                  GraphContent            +
                  CaseStudies             +
                  BenefitsContent         +
                  TypesTransportationData +
                  Map                     +
                  Standarts               +
                  Technologies            +
                  Footer                  +
                  inn;
