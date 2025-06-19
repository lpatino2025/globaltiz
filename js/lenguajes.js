const btnLenguaje = document.getElementById('lenguaje');

const traduccion = [
    ['#titulo-parte-1', 'Transformation and evolution'],
    ['#titulo-parte-2', 'of the digital society'],
    ['#titulo-objetivo', 'Our goal is to strengthen the organizational growth of our clients, adding value to competitiveness through the application of emerging technologies oriented towards digital transformation.'],
    ['#titulo-boton-contactanos', 'Contact us'],
    ['.txt-que-hacemos', 'What do we do?'],
    ['.txt-clientes', 'Our clients'],
    ['.txt-contactanos', 'Contact us'],
    ['#titulo-que-hacemos', 'What do we do?'],
    ['#texto-que-hacemos', 'We work to create value for our clients through the automation and generation of experiences focused on the end user through the following solutions:'],
    ['#item-que-hacemos-wym', 'Software development'],
    ['.item-que-hacemos-e-commerce', 'It Management'],
    ['.item-que-hacemos-bd', 'Artificial intelligence'],
    ['.item-que-hacemos-bd-ti', 'IT resource management'],
    ['.item-computacion-nube', 'Cloud Computing'],
    ['.item-que-hacemos-data-analytic', 'Data analytics'],
    ['#titulo-web-movil', 'Web and Mobile Development'],
    ['.txt-servicios', 'Services'],
    ['.txt-desarrollo', 'Web and Mobile Development'],
    ['.txt-desarrollo-web-movil-p', 'We specialize in creating digital solutions that not only stand out for their design and functionality, but also boost the growth and competitiveness of your company.Web & Mobile Development.'],
    ['.boton-tecnologias', 'Technologies'],
    ['.txt-titulo-iot-services', 'IOT services'],
    ['.txt-titulo-analitica-datos', 'Data analytics'],
    ['.txt-titulo-cloud-computing', 'Cloud computing'],
    ['.txt-desarrollo-web-movil', 'Web and mobile development'],
    ['.txt-titulo-iot-services2', 'IoT Service'],
    ['.lista-iot-services', `<li>Innovation in AI</li>
    <li>Change by text</li>
    <li>Chatbots and Virtual Assistants</li>
    <li>AI Model Development</li>
    <li>Optimization of Existing Models</li>
    <li>Model Updating</li>
    <li>Chatbots and Virtual Assistants</li>`],
    ['.txt-titulo-analitica-datos', 'Data analytics'],
    ['.lista-analitica-datos', `<li>Big data</li>
    <li>Machine learning</li>
    <li>Data Quality</li>
    <li>Real-time data movement</li>
    <li>Data Science Projects</li>
    <li>BI Services</li>
    <li>Data Governance</li>
    <li>Monitoring and Optimization</li>`],
    ['.txt-titulo-computacion-nube', 'Cloud computing'],
    ['.lista-computacion-nube', `<li>Amazon Web Services</li>
    <li>Oracle Cloud Infrastructure</li>
    <li>Cloud migration</li>
    <li>Cloud architecture design</li>
    <li>Time to market</li>
    <li>Optimization of operating costs</li>
    <li>Security</li>
    <li>Low latency platforms</li>`],
    // Pie de página: Servicios
    ['.titulo-contacto-pie-servicios', 'SERVICES'],
    ['.footer-servicios a[href="#desarrollo-web-movil"]', 'Web & Mobile Development'],
    ['.footer-servicios a[href="#titulo-analitica-datos"]', 'Data Analytics'],
    ['.footer-servicios a[href="#titulo-cloud-computing"]', 'Cloud Computing'],
    ['.footer-servicios a[href="#titulo-iot-services"]', 'Internet of Things'],
    // Pie de página: Dirección
    ['.footer-direcciones h4', 'ADDRESS'],
    ['.footer-direcciones div:nth-child(2) strong', 'Miami, USA'],
    ['.footer-direcciones div:nth-child(2)', '78 SW 7th St, Miami, FL 33130'],
    ['.footer-direcciones div:nth-child(3) strong', 'Bogotá, Colombia'],
    ['.footer-direcciones div:nth-child(3)', 'Cra. 11B #99-25'],
    // Pie de página: Contacto
    ['.footer-contacto-info h4', 'CONTACT'],
    ['.footer-contacto-info div:nth-child(2) strong', 'Email:'],
    ['.footer-contacto-info div:nth-child(2) a', 'customer@globaltiz.com'],
    ['.footer-contacto-info div:nth-child(3) strong', 'Phone:'],
    ['.footer-contacto-info div:nth-child(3) a', '+1 786 210 0045'],
    ['.footer-contacto-info div:nth-child(4) strong', 'WhatsApp:'],
    ['.footer-contacto-info div:nth-child(4) a', '+57 323 828 9060'],
];

const webMovil = [
    'Visualization and user experience',
    'Reducing Time to market',
    'Information Security',
    'Developing your custom business idea',
    'Cost optimization',
    'Business trends',
];

const otros = [
    [
        'e-commerce',
        `<li>Innovation in AI</li>
        <li>Switching by text</li>
        <li>Chatbots and Virtual Assistants</li>
        <li>AI Model Development</li>
        <li>Optimization of Existing Models</li>
        <li>Updating Models</li>
        <li>Chatbots and Virtual Assistants</li>`
    ],
    [
        'analitica-de-datos',
        `<li>Big data</li>
        <li>Machine learning</li>
        <li>Data Quality</li>
        <li>Real-time data movement</li>
        <li>Data Science Projects</li>
        <li>BI services</li>
        <li>Data Governance</li>
        <li>Monitoring and Optimization</li>`
    ],
    [
        'cloud-computing',
        `<li>Amazon Web Services - AWS</li>
        <li>Oracle Cloud Infrastructure - OCI</li>
        <li>Cloud Migration</li>
        <li>Cloud architecture design</li>
        <li>Time to market</li>
        <li>Cost optimization</li>
        <li>Security</li>
        <li>Low-latency platforms</li>`

    ],
];

btnLenguaje.addEventListener(

    'click',

    () => {
        let lenguaje = btnLenguaje.innerHTML.trim();

        if (lenguaje == "Es") {
            location.reload();
        }

        btnLenguaje.innerHTML = 'Es';

        for (let i = 0; i < traduccion.length; i++) {
            let element = document.querySelectorAll(traduccion[i][0]);
            for (let j = 0; j < element.length; j++) {
                element[j].innerHTML = traduccion[i][1];
            }
        }

        const wyb = document.querySelectorAll('.item');

        for (let index = 0; index < wyb.length; index++) {
            const i = wyb[index].querySelector('i');
            wyb[index].innerHTML = `${i.outerHTML} ${webMovil[index]}`;
        }

        for (let index = 0; index < otros.length; index++) {
            document.getElementById(otros[index][0]).querySelector('ul').innerHTML = otros[index][1];
        }

    }
);

