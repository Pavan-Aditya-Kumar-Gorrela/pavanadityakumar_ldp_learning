import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store/store'
import { fetchHabits, type Habit } from '../store/habitSlice';
import { LinearProgress, Paper, Typography } from '@mui/material';

const HabitStats = () => {
  const { habits, isLoading, error } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{
    dispatch(fetchHabits());
  },[]);

  if(isLoading){
    return <LinearProgress/>
  }

  if(error){
    return <Typography variant='body1'>{error}</Typography>
  }

  const getCompletedToday = () =>{
    const today = new Date().toISOString().split("T")[0];
    return habits.filter((h) => h.completedDates.includes(today));
  }

  const getStreak = (habit : Habit) => {
          let streak = 0;
          const currentDate = new Date();
          while(true){
              const dateString = currentDate.toISOString().split("T")[0];
              if(habit.completedDates.includes(dateString)){
                  streak++;
                  currentDate.setDate(currentDate.getDate() -1);
              }else{
                  break;
              }
          }
          return streak;
      }
  const getLongestStreak = () => {
    return Math.max(...habits.map(getStreak), 0)
  }


  return (
    <Paper elevation={2} sx={{ p:2 , mt:4}}>
        <Typography variant='h6' gutterBottom>
          Habit Statistics
        </Typography>
        <Typography variant='body1'>
          Total Habits: {habits.length}
        </Typography>
        <Typography variant='body1'>
          Completed Today: {getCompletedToday().length}
        </Typography>
        <Typography variant='body1'>
          Longest Streak: {getLongestStreak()}
        </Typography>
    </Paper>
  )
}

export default HabitStats