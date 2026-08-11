import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  Avatar, 
  Stack, 
  Box 
} from '@mui/material';
import { Email, PersonAdd, CheckCircle } from '@mui/icons-material';


interface UserProfileProps {
  name: string;
  role: string;
  email: string;
  avatarUrl?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ 
  name, 
  role, 
  email, 
  avatarUrl 
}) => {
 
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const handleFollowToggle = (): void => {
    setIsFollowing((prev) => !prev);
  };

  return (
    
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Card sx={{ maxWidth: 345, width: '100%', borderRadius: 3, boxShadow: 3, bgcolor: 'background.paper' }}>
        
        
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 4 }}>
          <Avatar 
            src={avatarUrl} 
            alt={name}
            sx={{ width: 80, height: 80, mb: 2, bgcolor: 'primary.main' }}
          >
            {/* Fallback if avatarUrl is missing */}
            {!avatarUrl && name.charAt(0)}
          </Avatar>

          <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {role}
          </Typography>

         
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'text.secondary' }}>
            <Email fontSize="small" />
            <Typography variant="caption">{email}</Typography>
          </Stack>
        </CardContent>

        <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 3 }}>
          <Button 
            variant="outlined" 
            size="small" 
            href={`mailto:${email}`}
            startIcon={<Email />}
          >
            Contact
          </Button>

          <Button 
            variant={isFollowing ? 'contained' : 'outlined'} 
            size="small" 
            color={isFollowing ? 'success' : 'primary'}
            onClick={handleFollowToggle}
            startIcon={isFollowing ? <CheckCircle /> : <PersonAdd />}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};