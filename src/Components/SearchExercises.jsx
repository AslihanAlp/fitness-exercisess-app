import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, getData } from "../utils/getData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import axios from "axios";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const getExercisesData = async () => {
      const response = await axios.get(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      const bodyPartsData = response.data
     

      setBodyParts(["all", ...bodyPartsData]);
      
    };
    
    getExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        mb="50px"
        textAlign="center"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          type="text"
          placeholder="Search Exercises"
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;