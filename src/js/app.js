import '../scss/reset.scss';
import '../scss/style.scss';

import './video-data';
import onYouTubeIframeAPIReady from './yt-loader';
import './data-handler';
import './ui';

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
