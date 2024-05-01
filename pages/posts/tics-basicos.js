import Post from "../../src/components/Post";
import Link from "next/link";

export default function TicsBasicos(){
    const firstParagraph = "Las Tecnologías de la Información y la Comunicación (TIC) son un conjunto de herramientas y recursos que permiten procesar, administrar y distribuir información a través de medios tecnológicos como computadoras, teléfonos, televisores y más.\n" +
        "\n" +
        "Su uso se ha incrementado exponencialmente con el tiempo, brindándonos servicios como el correo electrónico, la búsqueda y filtrado de información, descarga de materiales, comercio electrónico y mucho más.\n"

    const blockQuote = () => {
        return (
            <>
                <h2>Blockquotes</h2>
                <p>This is an example blockquote in action:</p>
                <blockquote className="blockquote">
                    <p>Quoted text goes here.</p>
                </blockquote>
            </>
        )
    }


    const postContent = (
        <div>
            <p>{firstParagraph}</p>

            <h3>
                ¿Cuál es su propósito?
            </h3>
            <p>Las TIC tienen como objetivo principal facilitar el acceso a la información de manera rápida y sencilla en cualquier formato. Esto se logra gracias a dos características fundamentales:</p>
            <ul>
                <li>Inmaterialidad: La información se digitaliza para almacenarse en grandes cantidades y acceder a ella desde cualquier dispositivo, sin importar la distancia.</li>
                <li>Inmediatez: La información puede compartirse instantáneamente, permitiendo una comunicación fluida y sin barreras.</li>
            </ul>

            <h3>
                ¿Qué beneficios nos aportan?
            </h3>
            <p>Las TIC ofrecen una amplia gama de beneficios que impactan positivamente en diversos aspectos de nuestra vida:</p>
            <dl>
                <dt>Salud y educación:</dt>
                <dd>Facilitan el acceso a información y recursos educativos de calidad, además de permitir el desarrollo de telemedicina y atención médica remota.</dd>
                <dt>Desarrollo profesional:</dt>
                <dd>Promueven el intercambio de información y conocimiento entre profesionales, impulsando su crecimiento y especialización.</dd>
                <dt>Apoyo a emprendedores:</dt>
                <dd>Brinda herramientas para la promoción de productos y servicios, abriendo nuevas oportunidades para pequeños empresarios.</dd>
                <dt>Aprendizaje interactivo:</dt>
                <dd>Fomenta experiencias de aprendizaje más dinámicas y participativas, adaptándose a las necesidades individuales de cada estudiante.</dd>
            </dl>
            <p>
                <strong>Las TIC se han convertido en un pilar fundamental de la sociedad actual</strong>, transformando la forma en que nos comunicamos, aprendemos, trabajamos y vivimos. Si estás interesado en especializarte en este campo, explora las diversas opciones de carreras en ingeniería y TIC disponibles, o contacta a un asesor académico para recibir orientación personalizada.
            </p>
            <p>
                <strong>¡El futuro está en tus manos!</strong>
            </p>
        </div>
    );

    return (
        <div>
            <Post
                title="¿En qué consisten las TIC?"
                date="1/5/2024"
                author="Carlos Andrade"
                content={postContent}
            />
        </div>
    );
}
