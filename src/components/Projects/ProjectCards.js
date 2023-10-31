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
      <Chip label={data.ProjectType} color={data.Color==='Blue'?"primary":"error"} size="small" style={{width:'128px', margin:'8px'}}/>
      <Slideshow images={data.Images} />
      <Card.Body onClick={handleCardClick}>
        <Card.Title>{data.Title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {data.Description}
        </Card.Text>
        {data.ghLink?<Button variant="primary" href={data.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          GitHub
        </Button>:null}
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
    {data.Details !=null?<DetailDialog open={DetailDialogOpen} setOpen={()=>setDetailDialogOpen(false)} data={data}/>:null}
    </>
  );
}
export default ProjectCards;
