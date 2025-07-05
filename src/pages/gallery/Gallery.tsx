import * as React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery,
  Modal,
  Backdrop,
  Typography,
} from "@mui/material";
import { useTranslate } from "../../hooks/useTranslation";

type GalleryItem = {
  type: "image" | "video";
  id?: number; // picsum için
  width?: number;
  height?: number;
  src?: string; // video linki için
};

const itemData: GalleryItem[] = [
  { type: "image", id: 1015, width: 600, height: 800 },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", id: 1025, width: 800, height: 600 },
  { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
  { type: "image", id: 1035, width: 400, height: 600 },
  { type: "image", id: 1045, width: 500, height: 700 },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", id: 1055, width: 700, height: 500 },
];

export const Gallery: React.FC = () => {
  const theme = useTheme();
  const { translate } = useTranslate("pages.gallery");
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(
    null
  );

  let cols = 5;
  if (isSmall) cols = 1;
  else if (isMedium) cols = 2;

  const handleOpen = (item: GalleryItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <Box sx={{ margin: 4 }}>
      <Typography
        variant="h2"
        textAlign={"center"}
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          fontWeight: 700,
          mb: 2,
        }}
      >
        {translate("title")}
      </Typography>
      <ImageList variant="masonry" cols={cols} gap={8}>
        {itemData.map((item, index) => (
          <ImageListItem
            key={index}
            sx={{
              overflow: "hidden",
              borderRadius: 2,
              cursor: "pointer",
              "& img, & video": {
                transition: "transform 0.4s ease",
                width: "100%",
                height: "auto",
                borderRadius: 2,
                display: "block",
              },
              "&:hover img, &:hover video": {
                transform: "scale(1.05)",
              },
            }}
            onClick={() => handleOpen(item)}
          >
            {item.type === "image" && item.id ? (
              <img
                src={`https://picsum.photos/id/${item.id}/${item.width}/${item.height}`}
                alt={`Picsum ${item.id}`}
                loading="lazy"
              />
            ) : item.type === "video" && item.src ? (
              <video
                src={item.src}
                controls
                muted
                playsInline
                style={{ display: "block" }}
              />
            ) : null}
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: { backgroundColor: "rgba(0,0,0,0.8)" },
          },
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
          }}
        >
          {selectedItem?.type === "image" && selectedItem.id ? (
            <img
              src={`https://picsum.photos/id/${selectedItem.id}/1200/800`}
              alt={`Picsum ${selectedItem.id}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: 8,
                display: "block",
              }}
            />
          ) : selectedItem?.type === "video" && selectedItem.src ? (
            <video
              src={selectedItem.src}
              controls
              autoPlay
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: 8,
                display: "block",
              }}
            />
          ) : null}
        </Box>
      </Modal>
    </Box>
  );
};
