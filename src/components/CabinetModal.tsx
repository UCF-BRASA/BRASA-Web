import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";
import { Button, Grid, Header, Icon, Modal } from "semantic-ui-react";

interface Props {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
  isMobile: boolean;
}

const CabinetModal: FC<Props> = ({ imageAlt, image, officerName, officerTitle, isMobile }) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Grid verticalAlign="middle" columns={2} centered>
          <Button fluid>Learn more</Button>
        </Grid>
      }
    >
      <Modal.Header>
        {officerTitle}
        <Button icon="close" color="grey" onClick={() => setOpen(false)} />
      </Modal.Header>
      <Modal.Content image>
        <Grid>
          <Grid.Column width={5}>
            <Image
              src={image}
              alt={imageAlt}
              sizes="100vw"
              //   className="rounded-t-[1rem] h-[30rem] w-full object-cover mx-auto"
            />
          </Grid.Column>

          <Grid.Column width={11}>
            <Header>Description</Header>

            <p>Salve</p>
          </Grid.Column>
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        {
          <a href={"mailto:" + "nani"} className="link-email">
            <Icon name="mail" />
            Contact via email
          </a>
        }
      </Modal.Actions>
    </Modal>
  );
};

export default CabinetModal;
