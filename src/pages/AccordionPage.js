import Accordion from "../components/Accordion";

function AccordionPage() {
  const accordionItems = [
    {
      id: 1,
      label: 'Accordion Label 1',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, libero.'
    },
    {
      id: 2,
      label: 'Accordion Label 2',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis unde similique ullam voluptas fugiat cumque minima perspiciatis atque sequi!'
    },
    {
      id: 3,
      label: 'Accordion Label 3',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, molestiae pariatur? Ipsa consequuntur vel quis sunt ad veritatis accusamus nisi qui voluptates. Qui accusamus perferendis iusto? Iure, id. Temporibus, iusto?'
    },
  ];

  return <Accordion items={accordionItems} />
}

export default AccordionPage;
