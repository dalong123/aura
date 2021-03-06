/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.auraframework.integration.test.perf;

import org.auraframework.integration.test.util.WebDriverTestCase;
import org.auraframework.util.test.annotation.PerfTest;
import org.junit.Test;

/**
 * Example PerfTests.
 */
@PerfTest
public final class PerfUITest extends WebDriverTestCase {
    @Test
    public void testLabel() throws Exception {
        openTotallyRaw("/ui/label.cmp?label=foo");
    }

    @Test
    public void testButton() throws Exception {
        openTotallyRaw("/ui/button.cmp?label=Push");
    }
}
