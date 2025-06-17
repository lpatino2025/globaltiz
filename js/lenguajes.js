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

