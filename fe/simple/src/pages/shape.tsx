import styled from "styled-components";
import img from "../assets/ruj7_fdbd_220311.jpg"
import { useEffect, useState } from "react";
import { getChild, sorted } from "../api/Api";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { Link } from "react-router-dom";

const Shape = () => {
  const [state, setState] = useState<Array<{}>>([])
  const [image, setImage] = useState<Array<{}>>([])

  useEffect(() =>{
    getChild().then((res) =>{
      console.log(state)
      setState(res)
    })

    sorted().then((res) =>{
      console.log(res)
      setImage(res)
    })
  },[])

  const onDrag = (res: any) =>{
    const {source, destination} = res

    let data = Array.from(state);
    let [newData] = data.splice(source.index, 1);
    data.splice(destination.index, 0, newData);

    setState(data);
  }


  return (
    <DragDropContext onDragEnd={onDrag}>
      <Container>
        <Link to="/">
          <Holdder>
            <Icon/>
          </Holdder>
        </Link>
        <Main>
          <TextTop>
            Match Up the correct One
          </TextTop>
          
          <Droppable droppableId="stateDragDrop">
            {(props) =>(
              <Wrapper {...props.droppableProps} ref={props.innerRef}>
              <Hold>
                <Text>Letter</Text>

                
                {state?.map((props: any, i: number) =>(
                  <Draggable draggableId={props._id} key={props._id} index={i}>
                    {(prov) =>{
                      return(
                        <Box
                        key={props._id}
                        {...prov.dragHandleProps}
                        {...prov.draggableProps}
                        ref={prov.innerRef}
                        >{props.shape}</Box>
                      )
                    }}
                  </Draggable>
                ))}
                {props.placeholder}
              </Hold>
  
              <Hold>
                <Text>Image</Text>
              {image?.map((props: any) =>(
                <Image key={props._id} src={props.shapeImage
                }/>
              ))}
              </Hold>
              </Wrapper>
            )}
          </Droppable>
        </Main>
      </Container>
    </DragDropContext >
  )
}

export default Shape;
const Holdder = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: purple;
display: flex;
align-items: center;
justify-content: center;
   position: absolute;
  top: 10px;
  left: 10px;
  transition: all 400ms ease-out;


  &:hover{
    cursor: pointer;
    transform: scale(1.02);
  }
`
const Icon = styled(AiOutlineArrowLeft)`
  font-size: 20px;
  font-weight: bolder;
  color: white;
 
`
const Wrapper = styled.div`
  display: flex;
`
const TextTop = styled.div`
font-family: Poppins;
font-size: 20px;
color: darkorange;
font-weight: bolder;
`
const Image = styled.img`
  /* height: 50px; */
  border: 1px solid silver;
  border-radius: 5px;
  margin-left: 7px;
  object-fit: cover;
  width: 100px;
  height: 100px;
`
const Box = styled.div`
  margin: 7px 7px;
  border: 1px solid silver;
  /* padding: 0 10px; */
  border-radius: 5px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100px;
  height: 100px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 10px;
  text-align: center;
  `;
const Text = styled.div``
const Hold = styled.div`
    border-radius: 5px;
    margin: 10px 30px;
    border: 1px solid silver;
    /* padding: 10px; */
    width: 120px;
   min-height: 100px;
`
const Main = styled.div`
  /* border: 1px solid silver; */
    border-radius: 5px;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #a31d8d;
    min-width: 100px;
    min-height: 200px;
`
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: relative;
`
