import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Chip from '@mui/material/Chip';
import { BsGithub } from "react-icons/bs";
import Slideshow from "./SlideShow";
import DetailDialog from "./DetailDialog";

function ProjectCards({data}) {
  const [DetailDialogOpen, setDetailDialogOpen] = useState(false)
  const handleCardClick = (e) => {
    setDetailDialogOpen(true)
  }
  return (
    <>
    <Card className="project-card-view" >
      <Chip label={data.ProjectType} color="primary" size="small" style={{width:'128px', margin:'8px'}}/>
      <Slideshow images={data.Images} />
      <Card.Body onClick={handleCardClick}>
        <Card.Title>{data.Title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {data.Description}
        </Card.Text>
        <Button variant="primary" href={data.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          GitHub
        </Button>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
    <DetailDialog open={DetailDialogOpen} setOpen={()=>setDetailDialogOpen(false)} data={data}/>
    </>
  );
}
export default ProjectCards;
