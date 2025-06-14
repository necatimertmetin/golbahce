import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import type { Post as PostType } from "../../pages/landing/components/flow/Flow";

type PostProps = {
  post: PostType;
};

export const Post = ({ post }: PostProps) => {
  return (
    <Box p={2}>
      <Stack spacing={2} width={468}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Avatar src={post.profilePic} alt={"elif"} />
            <Typography variant="body1" fontWeight={"bold"}>
              {post.username}
            </Typography>
            <span>•</span>
            <Typography variant="body2">{post.timestamp}</Typography>
          </Stack>

          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Stack>
        <img
          src={post.image}
          style={{ borderRadius: 4, border: "1px solid #aaa" }}
        />
      </Stack>
    </Box>
  );
};
