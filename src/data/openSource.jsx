import { Fa0, FaBahtSign, FaDocker, FaGit, FaGitAlt, FaLinux, FaReact } from "react-icons/fa6";
import { BsTerminal } from 'react-icons/bs'
import openDay from '../assets/openday.png'
import pfSense from '../assets/PfSense_idcyr9tuFi_1.svg'
import wireshark from '../assets/idLSwe6ZTX_1729757302738.svg'
import squid from '../assets/squid-svgrepo-com.svg'
import elastix from '../assets/elastix.png'
import vagrant from '../assets/idfZE47Gm8_logos.svg'
import ansible from '../assets/id4e-QHH7H_1729759257546.svg'
import zabbix from '../assets/idK9iYgl0P_1729759836862.png'
import icinga from '../assets/id0sh7FaeK_1729760047787.svg'
import kube from '../assets/kubernetes-svgrepo-com.svg'
export default [{ icon: <img src={kube} />,
    text: "Kubernetes"},
    {
    icon: <FaLinux color="#E95420"/>,
    text: "Linux"
}
    , {
    icon: <FaDocker color="#0db7ed" />,
    text: "Docker"
}, {
    icon: <img src={openDay}  />,
    text: "Open Daylight"
}, {
    icon: <img src={ pfSense} />,
    text: "PFsense"
}, {
    icon: <img src={wireshark} />,
    text: "Wire Shark"
}, {
        icon: <img src={squid} />,
    text: "Squid Cache"
    }, {
        icon: <img src={elastix} />,
    text: "Elastix"
    }, {
        icon: <img src={vagrant} />,
    text: "Vagrant"
    }, {
        icon: <FaGitAlt />,
    text: "Git"
    }, {
        icon: <img src={ansible} />,
    text: "Ansible"
    }, {
        icon: <BsTerminal />,
    text: "Bash Scripting"
    }, {
        icon: <img src={zabbix} />,
    text: "Zabbix"
    },
    {
        icon: <img src={icinga} />,
    text: "ICinGA"
    }
]