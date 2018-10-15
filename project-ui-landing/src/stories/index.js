import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '@material-ui/core/Button';
import LandingAppBar from '../components/LandingAppBar';
import RunningAnalysisCard from '../components/RunningAnalysisCard';
import 'typeface-roboto';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('LandingAppBar', module)
  .add('default', () => (
    <LandingAppBar />
  ));

storiesOf('RunningAnalysisCard', module)
  .add('default', () => (
    <RunningAnalysisCard
      appName="App Name"
      analysisName="Analysis Name"
      description="This is a test description of a running analysis."
      analysisLink="https://cyverse.org"
      owner="Owner Name"
    />
  ))
  .add('with description longer than 140 chars', () => (
    <RunningAnalysisCard
      appName="App Name"
      analysisName="Analysis Name"
      description="This is a test description of a running analysis. Adding more characters for testing purposes. Hopefully this will have an ellipsis added to the end of it. Adding even more inconsequential text."
      analysisLink="https://cyverse.org"
      owner="Owner Name"
    />
  ))
  .add('and with an analysis name longer than 32 chars', () => (
    <RunningAnalysisCard
      appName="App Name"
      analysisName="Analysis Name12345678901234567890"
      description="This is a test description of a running analysis. Adding more characters for testing purposes. Hopefully this will have an ellipsis added to the end of it. Adding even more inconsequential text."
      analysisLink="https://cyverse.org"
      owner="Owner Name"
    />
  ))
  .add('and with an app name longer than 30 chars', () => (
    <RunningAnalysisCard
      appName="App Name123456789012345678901234567890"
      analysisName="Analysis Name12345678901234567890"
      description="This is a test description of a running analysis. Adding more characters for testing purposes. Hopefully this will have an ellipsis added to the end of it. Adding even more inconsequential text."
      analysisLink="https://cyverse.org"
      owner="Owner Name"
    />
  ))
  .add('and with an owner longer than 34 chars', () => (
    <RunningAnalysisCard
      appName="App Name123456789012345678901234567890"
      analysisName="Analysis Name12345678901234567890"
      description="This is a test description of a running analysis. Adding more characters for testing purposes. Hopefully this will have an ellipsis added to the end of it. Adding even more inconsequential text."
      analysisLink="https://cyverse.org"
      owner="Owner Name123456789012345678901234567801234567890"
    />
  ));
