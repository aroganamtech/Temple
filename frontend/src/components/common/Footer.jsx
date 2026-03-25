import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import { GitHub, Twitter, Facebook, Language } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0B1A33",
        color: "#ccc",
        mt: 10,
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        {/* TOP SECTION */}
        <Grid container spacing={4}>
          {/* LOGO */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
              ≋ flow ui
            </Typography>
          </Grid>

          {/* ABOUT */}
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="subtitle2" sx={{ mb: 2, color: "#fff" }}>
              ABOUT
            </Typography>
            {["About", "Submit an issue", "GitHub Repo", "Slack"].map(
              (item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{
                    mb: 1,
                    cursor: "pointer",
                    "&:hover": { color: "#DAA520" },
                  }}
                >
                  {item}
                </Typography>
              )
            )}
          </Grid>

          {/* GETTING STARTED */}
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="subtitle2" sx={{ mb: 2, color: "#fff" }}>
              GETTING STARTED
            </Typography>
            {[
              "Introduction",
              "Documentation",
              "Usage",
              "Globals",
              "Elements",
              "Collections",
              "Themes",
            ].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": { color: "#DAA520" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* RESOURCES */}
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="subtitle2" sx={{ mb: 2, color: "#fff" }}>
              RESOURCES
            </Typography>
            {[
              "API",
              "Form Validations",
              "Visibility",
              "Accessibility",
              "Community",
              "Design Defined",
              "Marketplace",
            ].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": { color: "#DAA520" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* SOCIAL */}
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="subtitle2" sx={{ mb: 2, color: "#fff" }}>
              SOCIAL MEDIA
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Follow us on social media to find out the latest updates on our
              progress.
            </Typography>

            <Box>
              <IconButton sx={{ color: "#ccc", "&:hover": { color: "#DAA520" } }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "#ccc", "&:hover": { color: "#DAA520" } }}>
                <GitHub />
              </IconButton>
              <IconButton sx={{ color: "#ccc", "&:hover": { color: "#DAA520" } }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "#ccc", "&:hover": { color: "#DAA520" } }}>
                <Language />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* DIVIDER */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: 5,
            mb: 3,
          }}
        />

        {/* BOTTOM SECTION */}
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* LEFT */}
          <Grid item xs={12} md={4}>
            <Typography variant="body2" textAlign={{ xs: "center", md: "left" }}>
              © 2026 flow-ui. All rights reserved.
            </Typography>
          </Grid>

          {/* CENTER LINKS */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {["Terms of Service", "Privacy Policy", "Security", "Sitemap"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    underline="none"
                    sx={{
                      color: "#ccc",
                      fontSize: "0.875rem",
                      "&:hover": { color: "#DAA520" },
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Box>
          </Grid>

          {/* RIGHT LANGUAGE */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
            <Select
              size="small"
              defaultValue="en"
              sx={{
                color: "#ccc",
                border: "1px solid #444",
                ".MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="ta">Tamil</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;