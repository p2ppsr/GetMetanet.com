/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Link,
  Paper,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  Stack,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useSpring, animated } from 'react-spring';

/**
 * Single-page React component for MetaNet Desktop landing page.
 * Feel free to adjust text, styles, or animation as needed.
 */

// 1) Create an MUI theme for styling
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#006CFF',
    },
    secondary: {
      main: '#FF6C00',
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
  },
});

const HeroSection: React.FC = () => {
  // 2) Use react-spring for a simple fade-in animation on the heading
  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
    delay: 100,
    config: { tension: 150, friction: 20 },
  });

  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#F5F8FC',
        padding: 4,
      }}
    >
      <Container maxWidth="md">
        <animated.div style={heroSpring}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
            🟢 MetaNet Desktop
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 3 }}>
            Your Gateway to the BSV Blockchain
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<DownloadIcon />}
            sx={{ borderRadius: 4, textTransform: 'none', fontWeight: 600 }}
            onClick={() => {
              // Typically navigate to downloads or anchor link
              // This is just a placeholder
              window.alert('Download button clicked!');
            }}
          >
            Download Now
          </Button>
        </animated.div>
      </Container>
    </Box>
  );
};

const BenefitsSection: React.FC = () => (
  <Box sx={{ paddingY: 8, backgroundColor: '#FFFFFF' }}>
    <Container maxWidth="md">
      <Stack spacing={4}>
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
          🚀 Key Benefits
        </Typography>

        <Grid container spacing={4}>
          {/* Universal Compatibility */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  ✅ Universal Compatibility
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  Built on the vendor-neutral BRC-100 wallet standard, MetaNet Desktop effortlessly
                  interacts with any BSV dApp, exchange, marketplace, or blockchain application.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Security & Privilege Management */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  🔒 Security & Privilege Management
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  Sophisticated key derivation, robust cryptographic signatures, secure encryption,
                  and strict access permissions safeguard your identity and assets.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Decentralized Identity */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  🌐 Decentralized Identity
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  Leverage cryptographic identity certificates for selective data revelation.
                  Manage identity securely and privately without centralized liabilities.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Easy-to-Use */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  💡 Easy-to-Use
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  A clear, streamlined UI simplifies interactions: identity management, secure
                  payments, and data sharing across blockchain apps made straightforward.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Total Interoperability */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  🔗 Total Interoperability
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  Complies fully with the open BRC-100 Wallet Interface, ensuring compatibility
                  with all compliant wallets and apps in the BSV ecosystem.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  </Box>
);

const FeaturesSection: React.FC = () => (
  <Box sx={{ paddingY: 8, backgroundColor: '#F5F8FC' }}>
    <Container maxWidth="md">
      <Stack spacing={4}>
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
          🎯 Core Features
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              • Action-Oriented Transactions
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Experience complete transparency and control with labeled actions, tagged baskets,
              and rich metadata for every transaction.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              • Robust Cryptography
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              AES-256-GCM encryption and ECDSA signatures ensure your data stays private at all times.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              • Identity & Certificate Manager
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Acquire, manage, prove, or relinquish cryptographic identity certificates. Reveal
              only relevant fields to different apps or individuals.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              • SPV and Scalability
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Built with Simplified Payment Verification (SPV) and BEEF blockchain data standards
              for speed, efficiency, and a lightweight footprint.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              • Auditable Proofs & Key Linkages
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Provide verifiable cryptographic proofs without revealing sensitive secrets for
              enhanced transparency, auditability, and privacy.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              • Flexible Asset & Key Permissions
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Organize and control your digital tokens and keys through named baskets and protocol
              contexts. Permit or restrict access clearly and intuitively.
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  </Box>
);

const DownloadsSection: React.FC = () => (
  <Box sx={{ paddingY: 8 }}>
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', marginBottom: 4 }}>
        🖥️ System Requirements & Downloads
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2 }}>
              System Requirements
            </Typography>
            <Typography variant="body2">• OS: Windows, macOS, or Linux</Typography>
            <Typography variant="body2">• Architecture: x64 or Apple Silicon</Typography>
            <Typography variant="body2">• RAM: 1GB minimum</Typography>
            <Typography variant="body2">• Storage: 5MB free disk space</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2 }}>
              Download MetaNet Desktop
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Platform</TableCell>
                  <TableCell>Version</TableCell>
                  <TableCell>Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>🪟 Windows</TableCell>
                  <TableCell>v1.0.0</TableCell>
                  <TableCell>
                    <Link href="#" underline="hover" color="primary">
                      Download for Windows
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>🍎 macOS</TableCell>
                  <TableCell>v1.0.0</TableCell>
                  <TableCell>
                    <Link href="#" underline="hover" color="primary">
                      Download for macOS
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>🐧 Linux</TableCell>
                  <TableCell>v1.0.0</TableCell>
                  <TableCell>
                    <Link href="#" underline="hover" color="primary">
                      Download for Linux
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const DocumentationSection: React.FC = () => (
  <Box sx={{ paddingY: 8, backgroundColor: '#F5F8FC' }}>
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', marginBottom: 4 }}>
        📚 Documentation & Resources
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            • <Link href="#" underline="hover" color="primary">MetaNet Desktop User Guide</Link>
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            • <Link href="#" underline="hover" color="primary">What is BRC-100?</Link>
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            • <Link href="#" underline="hover" color="primary">Crypto & Security Guide</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            • <Link href="#" underline="hover" color="primary">Developer API & ABI Specifications</Link>
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            • <Link href="#" underline="hover" color="primary">Frequently Asked Questions (FAQs)</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const WhySwitchSection: React.FC = () => (
  <Box sx={{ paddingY: 8 }}>
    <Container maxWidth="md">
      <Stack spacing={3}>
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
          🌟 Why Switch to MetaNet Desktop?
        </Typography>
        <Typography variant="body1">
          Today’s digital ecosystem is plagued by complexity, insecurity, and centralization.
          Centralized services harvest your data, expose your identity, and control your experience.
          It's time to replace them.
        </Typography>
        <Typography variant="body1">
          MetaNet Desktop, empowered by BRC-100, provides a secure, intuitive, open, and
          decentralized alternative, where your digital identity, private data, and financial
          assets always remain under your full control.
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          **Experience digital freedom. Download MetaNet Desktop today.**
        </Typography>
      </Stack>
    </Container>
  </Box>
);

const FooterSection: React.FC = () => (
  <Box sx={{ backgroundColor: '#E5E5E5', paddingY: 4 }}>
    <Container maxWidth="md">
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            © {new Date().getFullYear()} MetaNet Desktop. All rights reserved.
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="hover" color="inherit" sx={{ marginRight: 2 }}>
              Privacy Policy
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Terms of Service
            </Link>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}
        >
          <IconButton
            aria-label="GitHub"
            color="inherit"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            color="inherit"
            onClick={() => window.open('https://twitter.com', '_blank')}
          >
            <TwitterIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            MetaNet Desktop
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              // Typically handle CTA or navigation here
              window.alert('Download CTA clicked!');
            }}
          >
            Download
          </Button>
        </Toolbar>
      </AppBar>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <DownloadsSection />
      <DocumentationSection />
      <WhySwitchSection />
      <FooterSection />
    </ThemeProvider>
  );
};

// 3) Render the page (replace 'root' with the ID of your mount div)
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}

// If your environment or bundler doesn’t support createRoot:
// ReactDOM.render(<App />, document.getElementById('root'));
