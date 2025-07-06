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
  id?: number;
  width?: number;
  height?: number;
  src?: string;
};

const itemData: GalleryItem[] = [
  { type: "image", src: "/images/gallery/IMG-20250705-WA0035.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0038.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0039.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0041.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0043.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0044.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0045.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0046.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0047.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0048.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0049.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0050.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0051.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0052.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0078.jpg" },
  { type: "image", src: "/images/gallery/IMG-20250705-WA0079.jpg" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0001.mp4" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0002.mp4" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0003.mp4" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0004.mp4" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0005.mp4" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0006.mp4" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0010.mp4" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0011.mp4" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0012.mp4" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0013.mp4" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0014.mp4" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0015.mp4" },
  { type: "video", src: "/images/gallery/VID-20250705-WA0016.mp4" },
  { type: "video", src: "/images/gallery/VID-20250706-WA0004.mp4" },
  {
    type: "video",
    src: "/images/gallery/WhatsApp Video 2025-07-05 at 21.41.12_85174b81.mp4",
  },
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
              "&:hover img": {
                transform: "scale(1.05)",
              },
            }}
            onClick={() => handleOpen(item)}
          >
            {item.type === "image" && item.src ? (
              <img src={item.src} alt="" loading="lazy" />
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
          {selectedItem?.type === "image" && selectedItem.src ? (
            <img
              src={selectedItem.src}
              alt=""
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
